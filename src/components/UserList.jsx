import React from 'react'
import Button from 'react-bootstrap/Button';
import { ReactComponent as User } from '../assets/user.svg'
import { ReactComponent as Unlock } from '../assets/unlock.svg'
import { ReactComponent as Pencil } from '../assets/pencil-alt.svg'



const UserList = () => {
    return (
        <div className="user-list">
            <div className="container-fluid">
                <div className="row justify-content-end padding">
                    <Button className="button-new-user"><User />New User</Button>
                </div>

                <div className="table-holder">
                    <div className="row justify-content-between">
                        <div className="col-sm-6 col-lg-2" >
                            <select
                                className="form-control"
                                // onChange={onChange}
                                style={{ borderRadius: "1px", height: '35px' }}
                            >
                                <option key="10" selected value="10">10</option>
                                <option key="20" selected value="20">20</option>
                                <option key="50" selected value="50">50</option>
                                <option key="100" selected value="100">100</option>

                            </select>
                        </div>
                        <div className="col-sm-6 col-lg-3" >
                            <input
                                style={{ borderRadius: "1px", height: '35px' }}
                                // value={value}
                                // onChange={onChange}
                                // onBlur={onBlur}
                                placeholder="Search..."
                                className="form-control"
                            />
                        </div>
                    </div>
                    <table class="table  table-bordered" >
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
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td></td>
                                <td>augue</td>
                                <td>05-02-1985	</td>
                                <td>Admin</td>
                                <td><Unlock /></td>
                                <td><Pencil/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
    )
}

export default UserList
