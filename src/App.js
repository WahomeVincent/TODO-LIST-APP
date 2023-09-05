import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo(todo) {
    const newTodo = {
      id: Math.random(),
      todo : todo
    }

    // Add Todos to my list
    setTodos([...todos, newTodo])

    // Clear my List
    setInput('')

  }

  function deleteTodo() {
    
  }

  return (
    <div className="App">
      <h1 className='header'>My Todo List</h1>
      <input 
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>
        Add task
      </button>
      <ul>
       {todos.map((todo) => (
        <li key={todo.id}>
          {todo.todo}
          <button onClick={deleteTodo}>&times;</button>
        </li>
        
       ))}
      </ul>
    </div>
  );
}

export default App;
