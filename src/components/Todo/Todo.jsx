import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import { Route,Routes } from 'react-router';

const App = () =>{
 
  const [todos, setTodos]=useState([

    {
        title:'Milton'
    }

  ])

  const addTodo = (todo) =>{
      setTodos([...todos,todo])
  }


return (
    
    <div className="App">
        <Form addTodo={addTodo} />
        {todos.map((todo) => (
        <TodoItem todo={todo}/>
        ))}
        {!todos.length && <p>No todos</p>}
    </div>
  );
}
export default Todo;