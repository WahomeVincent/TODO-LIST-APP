import React, { useState } from 'react';
import "./App.css"


function App() {

  const [isComplete, setIsComplete] = useState(false)

  return (
    <div className="app">
      <div>
        <h1>My Todos</h1>
      </div>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-item'>
            <label>Title</label>
            <input type='text' placeholder='Input your title here'/>
          </div>

          <div className='todo-item'>
            <label>Description</label>
            <input type='text' placeholder='Input your description here'/>
          </div>

          <div className='todo-item'>
            <button type='button' className='primaryBtn'>Add todo</button>
          </div>
          
        </div>

      <div className='btn-area'>
        <button className={`secondaryBtn ${isComplete === false && 'active'} `}
        onClick={() => setIsComplete(true)}>todos</button>
        <button className={`secondaryBtn ${isComplete === true && 'active'} `}
        onClick={() => setIsComplete(false)}>Completed</button>
      </div>

      <div className='todo-lists'>
        <p>Todo lists</p>
        <p>Content 1</p>
      </div>

      </div>
      
    </div>
  );
}

export default App;
