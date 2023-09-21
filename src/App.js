import React, { useEffect, useState } from 'react';
import "./App.css"

import {AiFillDelete} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs'
// import { logRoles } from '@testing-library/react';


function App() {

  const [isComplete, setIsComplete] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);

  

  function handleAddTodo() {

    let newTodo = {
      title:newTitle,
      description:newDescription
    }

    let updatedArray = [...allTodos]

    updatedArray.push(newTodo);
    setAllTodos(updatedArray)
    // Saving the data to localstorage so that wheh the page is refreshed the data remains.
    localStorage.setItem('todolist', JSON.stringify(updatedArray))
   

   
    // Clears the Title field
    setNewTitle('') 
    // Clears the Description field
    setNewDescription('')
  }

  function handleDelete(index) {
    let reducedTodos = [...allTodos];

    // Take allTodos and remove 1 element at the said index.
    reducedTodos.splice(index, 1); 

    localStorage.setItem('todolist',JSON.stringify(reducedTodos))
    setAllTodos(reducedTodos)
   
  }

  function handleCompleteTodos (index) {

    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1 ;
    let year = now.getFullYear();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    // let seconds = now.getSeconds();
    
    let completedOn = day + '-' + month + '-' + year + ' at ' + hour + ':' + minutes

    let filteredItem = {
      ...allTodos[index],
      completedOn:completedOn
    }

    let updatedCompletedArray = [...completedTodos]
    updatedCompletedArray.push(filteredItem)

    setCompletedTodos(updatedCompletedArray) 
    // Deletes the Completed item from the 'todos list'
    handleDelete(index)
    localStorage.setItem('completed-todos', JSON.stringify(updatedCompletedArray))

  }

  

  // Saving the data to localstorage so that wheh the page is refreshed the data remains.

  useEffect(()=>{
     // JSON.parse is used to convert the data back to an array.
    let savedTodos = JSON.parse(localStorage.getItem('todolist'))
    let savedCompletedTodos = JSON.parse(localStorage.getItem('completed-todos'))

    if(savedTodos){
      setAllTodos(savedTodos)
    }

    if(savedCompletedTodos){
      setCompletedTodos(savedCompletedTodos)
    }

  },[])

  return (
    <div className="app">
      <div>
        <h1>My Todos</h1>
      </div>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-item'>
            <label>Title</label>
            <input type='text' 
              placeholder='Input your title here'
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              
              />
          </div>

          <div className='todo-item'>
            <label>Description</label>
            <input type='text' 
              placeholder='Input your description here'
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              
            />
          </div>

          <div className='todo-item'>
            <button type='button' className='primaryBtn' onClick={handleAddTodo}>Add todo</button>
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
       {isComplete === false && allTodos.map((item, index) => {
        return (
          <div className='todo-list-item' key={index}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}   </p>
          </div>
          <div>
            <AiFillDelete className='delete-icon' onClick={() => handleDelete(index)}/>
            <BsCheckLg className='check-icon' onClick={() =>  handleCompleteTodos(index)}/>
          </div>
        </div>
        )
       })}

      {isComplete === true && completedTodos.map((item, index) => {
        return (
          <div className='todo-list-item' key={index}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><small>Completed on: {item.completedOn}</small></p>
          </div>
          <div>
            <AiFillDelete className='delete-icon' />
            {/* <BsCheckLg className='check-icon' onClick={handleCompleteTodos}/> */}
          </div>
        </div>
        )
       })}
        
        
      </div >
        
      </div>
      
    </div>
  );
}

export default App;
