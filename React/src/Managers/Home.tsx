import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../Redux/Actions/action";


const ManagerHome = () => {

    const dispatch  = useDispatch();
    const employees = useSelector((state: any) => {
        return state.managerReducer.employees;
    })
    const manager = localStorage.getItem("username");
    
    dispatch(getEmployees(manager))
    
    return (
        <div>
            <div className="bg-theme col-md-12 p-2">
                <h1>Manager Home</h1>
            </div>
            <div className="col-md-12 container pt-5">
                <h3>Employee List</h3>
                <table className="table table-bordered">
                    <thead className="bg-theme">
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Skills</th>
                            <th>Experience</th>
                            <th>Manager</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee: any) => 
                                <tr>
                                    <td>{employee.employee_id}</td>
                                    <td>{employee.name}</td>
                                    <td>
                                        {
                                            employee.skills.map((skill:any) => 
                                                <span className="badge p-2 m-1 bg-secondary">{skill.name}</span>
                                            )
                                        }
                                    </td>
                                    <td>{employee.experience}</td>
                                    <td>{employee.manager}</td>
                                    <td>
                                        <button className="btn btn-primary">
                                            Request Lock
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div> 
    )
        
}

export default ManagerHome