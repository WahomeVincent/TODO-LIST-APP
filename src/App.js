import React, { useState } from 'react';
import "./App.css"

import {AiFillDelete} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs'


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
        {/* Sets the classname of the button based on the state of the variable */}
        <button className={`secondaryBtn ${isComplete === false && 'active'} `}
        onClick={() => setIsComplete(false)}>todos</button>
        <button className={`secondaryBtn ${isComplete === true && 'active'} `}
        onClick={() => setIsComplete(true)}>Completed</button>
      </div>

      <div className='todo-list'>
        <div className='todo-list-item'>
          <div>
            <h3>Todo lists</h3>
            <p>Content 1</p>
          </div>
          <div>
            <AiFillDelete className='delete-icon'/>
            <BsCheckLg className='check-icon'/>
          </div>
        </div>
        
        
      </div >
        
      </div>
      
    </div>
  );
}

export default App;
