import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { ReactComponent as User } from '../assets/user.svg'
import { ReactComponent as Unlock } from '../assets/unlock.svg'
import { ReactComponent as Pencil } from '../assets/pencil-alt.svg'
import apiService from '../helpers/apiService'
import Pagination from './Pagination';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';


const UserList = () => {

    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(0)
    const [listSize, setListSize] = useState(10)
    const [searchKey, setSearchKey] = useState("")
    const [usersList, setUsersList] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        async function fetchPages() {
            if (searchKey === "") {
                const userCount = await apiService.get('home/user/count', {})
                await setPages(Math.ceil(userCount.data.object / listSize))

            } else {
                const userCount = await apiService.get(`home/user/count?searchKey=${searchKey}`)
                setPages(Math.ceil(userCount.data.object / listSize))
            }
        }
        fetchPages();
    }, [searchKey, listSize, count])

    useEffect(() => {
        async function fetchList() {
            if (searchKey === "") {
                const list = await apiService.get(`home/user/list?listLength=${listSize}&pageNumber=${page}`)
                setUsersList(list.data.object)
            } else {
                const list = await apiService.get(`home/user/list?listLength=${listSize}&pageNumber=${page}&searchKey=${searchKey}`, {})
                setUsersList(list.data.object)
            }
        }
        fetchList();
    }, [searchKey, listSize, page, count])

    const changePage = (event, value) => {
        setPage(value);
    };

    const handleDelete = async (event) => {
        await apiService.get(`home/user/delete?id=${event.target.id}`)
        setCount(count + 1);
    }

    return (
        <div className="user-list">
            <div className="container-fluid">
                <div className="row justify-content-end padding">
                    <Button className="button-new-user"><User />New User</Button>
                </div>
                <div className="table-holder">
                    <div className="row justify-content-between">
                        <div className="col-md-3 col-lg-2 col-sm-4 col-5" >
                            <select
                                className="form-control"
                                onChange={(event) => setListSize(event.target.value)}
                                style={{ borderRadius: "1px", height: '35px' }}
                            >
                                <option key="10" value="10">10</option>
                                <option key="20" value="20">20</option>
                                <option key="50" value="50">50</option>
                                <option key="100" value="100">100</option>

                            </select>
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-4 col-6" >
                            <input
                                style={{ borderRadius: "1px", height: '35px' }}
                                onKeyUp={event => { setSearchKey(event.target.value) }}
                                placeholder="Search..."
                                className="form-control"
                            />
                        </div>
                    </div>
                    <table className="table table-responsive table-bordered" >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Dob</th>
                                <th>Status</th>
                                <th>Role</th>
                                <th>Account</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {usersList.map((user) => {
                                const userPic = `http://localhost:8080/home/user/image/${user.profilePic}`
                                return <tr key={user.id}>
                                    <td style={{ textAlign: "center", padding: '5px 2px' }}><img src={userPic} alt="" style={{ height: '40px', objectFit: 'cover' }} /></td>
                                    <td>{user.firstname} {user.middlename} {user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {(user.dateOfBirth !== null) ? <Moment format="DD/MM/YYYY">
                                            {user.dateOfBirth}
                                        </Moment> : <></>}
                                    </td>
                                    <td><Button className="button-active">Active</Button>
                                    </td>
                                    <td>{user.role}</td>
                                    <td style={{ textAlign: "center" }}> <Unlock /> </td>
                                    <td style={{ textAlign: "center" }} >
                                        <Link to={{
                                            pathname: "/updateuser",
                                            state: {
                                                user: user
                                            }
                                        }}>
                                            <Pencil />
                                        </Link>
                                        <svg id={user.id} onClick={handleDelete} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" fill="red" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" fill="red" />
                                        </svg>

                                    </td>
                                </tr>
                            })
                            }
                        </tbody>
                    </table>
                </div>
                <Pagination pages={pages} changePage={changePage} />
            </div>
        </div>
    )
}

export default UserList
