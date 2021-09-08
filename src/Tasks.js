import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Tasks = () => {

    const [listOfTasks, setListOfTasks] = useState([])
    useEffect(() => {
        axios.get('https://600e7b0e3bb1d100179df4d5.mockapi.io/Tasks')
            .then(res => { setListOfUSer(res.data) })
            .catch(err => { })

    return (
        <div>
            
        </div>
    )
}

export default Tasks
