import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
function ListTask() {
  const tasks = useSelector(state => state.tasks)
  console.log(tasks);
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, [])
  return (
    <div className="row">
      <div className="col-6 m-auto">
        {
          tasks.map((task, index) => (
            <div key={index}>
              <span>{task.description}</span>
            </div>
          ))
        }
      </div>
      <div className="col-7 m-auto">
        {
          todos.map((task, index) => (
            <div key={index}>
              <span>{task.title}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ListTask
