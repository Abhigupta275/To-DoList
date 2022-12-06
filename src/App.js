import React from 'react'
import "./App.css";
import ToDoApp from './components/ToDoApp';

function App() {
  return (
    <div className='App'>
        <span className='title'>Todo List</span><br/>
        <ToDoApp />
    </div>
  );
}
export default App;
