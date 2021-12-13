import { useDispatch, useSelector } from "react-redux";
import { getSoftlockRequests } from "../Redux/Actions/action";


const WFMHome = () => {
debugger;
    const dispatch  = useDispatch();
    const softlocks = useSelector((state: any) => {
        return state.wfmManagerReducer.softlocks;
    })
    const wfm_manager = localStorage.getItem("username");
    
    dispatch(getSoftlockRequests(wfm_manager))
    
    return (
        <div>
            <div className="bg-theme col-md-12 p-2">
                <h1>WFM Home</h1>
            </div>
            <div className="col-md-12 container pt-5">
                <h3>Softlock Request List</h3>
                <table className="table table-bordered">
                    <thead className="bg-theme">
                        <tr>
                            <th>Employee ID</th>
                            <th>Requestee</th>
                            <th>Request Date</th>
                            <th>Employee Manager</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            softlocks.map((softlock: any) => 
                                <tr>
                                    <td>{softlock.employee_id}</td>
                                    <td>{softlock.name}</td>
                                    <td>{softlock.reqdate}</td>
                                    <td>{wfm_manager}</td>
                                    <td>
                                        <button className="btn btn-primary">
                                            View Details
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

export default WFMHome