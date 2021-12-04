import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTaskAction } from '../redux/action/actions'

function AddTask() {
  const dispatch = useDispatch()
  const [task, setTask] = useState('')
  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(task);
    dispatch(addTaskAction({
      id: new Date().getTime(),
      description: task,
      isDone: false
    }))
  }
  return (
    <form className='row' onSubmit={handelSubmit}>
      <div className=" m-auto mb-3 col-6 ttext-start ">
        <label for="exampleFormControlInput1" className="form-label">Task</label>
        <input onChange={(e) => setTask(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="task" />
        <button className="btn btn-primary" type="submit">Submit form</button>
      </div>
      <div className="col-7">
      </div>
    </form>
  )
}

export default AddTask