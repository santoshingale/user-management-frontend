import React from 'react'
import { useSelector } from 'react-redux'

const Webpage1 = ({ page }) => {
    const user = useSelector(users => users.user)
    return (
        <div className="webpage">
            <div className="container-fluid" >
                <div className="web-body" >
                    <h3>Webpage Permissions</h3>
                    <div className="main-body">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Add Permission</td>
                                    <td>
                                        <label className="switch" style={{ marginBottom: 0 }}>
                                            <input type="checkbox"
                                                checked={user.userPermission[`add${page}`]}
                                                onChange={()=>{}}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Delete Permission</td>
                                    <td><label className="switch" style={{ marginBottom: 0 }}>
                                        <input type="checkbox"
                                            checked={user.userPermission[`delete${page}`]}
                                            onChange={()=>{}}
                                        />
                                        <span className="slider round"></span>
                                    </label></td>
                                </tr>
                                <tr>
                                    <td>Modify Permission</td>
                                    <td>
                                        <label className="switch" style={{ marginBottom: 0 }}>
                                            <input type="checkbox"
                                                checked={user.userPermission[`modify${page}`]}
                                                onChange={()=>{}}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Read Permission</td>
                                    <td>
                                        <label className="switch" style={{ marginBottom: 0 }}>
                                            <input type="checkbox"
                                                checked={user.userPermission[`read${page}`]}
                                                onChange={()=>{}}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Webpage1
