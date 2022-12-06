import React, { useState } from 'react'
import "./todoapp.css";

function ToDoApp() {

  const [task, setTask] = useState(" ")
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  }
  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),   //to give unique id in the list
        // isCompleted: false,
        value: task
      }
      setTaskList([...taskList, taskDetails]);    //...taskList for storing previews state value use spread operator
    }
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id != id));   //filter for find new unique key
  }

  return (
    <div className='todo'>
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder='Add task here...' />
      <button className="add-btn" onClick={AddTask} >Add</button><br />
      {/* {taskList !== [] ?   */}
      <ul>
        {taskList.map((t) => (
          <li className='listitem'>{t.value}
            <button className="delete" onClick={(e) => deleteTask(e, t.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* : null }                */}
    </div>
  )
}

export default ToDoApp