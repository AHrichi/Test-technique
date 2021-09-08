import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

const Tasks = () => {

    const [listOfTasks, setListOfTasks] = useState([])
    const [filter, setFilter] = useState('')
    useEffect(() => {
        axios.get('https://600e7b0e3bb1d100179df4d5.mockapi.io/Tasks')
            .then(res => { setListOfTasks(res.data) })
            .catch(err => { })
    })
    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();

        var time = date + ' ' + month + ' ' + year;
        return time;
    }

    function pr(num) {
        var pr = "";
        switch (num) {

            case 1:
                pr = "Critical";
                break;
            case 2:
                pr = "High";
                break;
            case 3:
                pr = "Medium";
                break;
            case 4:
                pr = "Low";
                break;



        }
        return pr
    }

    

    return (
        <div className="container m-5" style={{display:'flex',justifyContent:'center' ,flexDirection:'column'}}>
            <div>
                <input className="m-3" onChange={(e)=>setFilter(e.target.value)}>
                </input>
            </div>
            
            <Table  bordered  >
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Assignees</th>
                        <th>Priority</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    listOfTasks.filter(x=>x.Task_name.toLowerCase().includes(filter.toLowerCase())||
                    (x.assigness.toLowerCase().includes(filter.toLowerCase()))).map(Task => <tr>


                        <td>{Task.Task_name}</td>
                        <td>{Task.assigness}</td>
                        <td>{pr(Task.Priority)}</td>
                        <td>{timeConverter(Task.Due_date)}</td>



                    </tr>)}
                    
                </tbody>
            </Table>
        </div>
    )
}

export default Tasks
