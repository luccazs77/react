import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const AddTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const DeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className='head'>
        <h1>TO DO LIST</h1>
        <h3>vamos deixar de procastinar?</h3>
      </div>
      
     
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() =>DeleteTodo(index)}>X</button>
          </li>
        ))}
      </ul>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Nova nota"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={AddTodo}>+</button>
      </div>
    </div>
  );
}

export default App;
