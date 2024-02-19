import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Admin() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const res = await axios.get('/api/admin/todos');
    setTodos(res.data);
  }

  const addTodo = async () => {
    try {
        await axios.post('/api/admin/todos', {text: newTodo});
        getTodos();
        setNewTodo('');
    } catch (error) {
        console.log(error);
    }
  }

  const deleteTodo = async (id) => {
    await axios.delete(`/api/admin/todos/${id}`);
    getTodos();
  }

  return (
    <React.Fragment>
          <div>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      {todos.length > 0 && (
        <ul>
        {todos.map(todo => (
           <li key={todo.id}>
               {todo.text}
               <button onClick={() => deleteTodo(todo.id)}>Delete</button>
           </li>
         ))}
       </ul>
      )}
      
    </div>
    </React.Fragment>

  );
}

export default Admin