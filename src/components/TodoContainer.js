/* eslint-disable */
import React, { useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import Navbar from './Navbar';

const TodoContainer = () =>{
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup Development for Restaurant Development Environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website with the provided colors',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ])
  
 const handleChange = (id) => {
    setTodos(prevState => 
        prevState.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
        return todo;
      })
    )
  }

  const delTodo = id => {
    setTodos([
        ...todos.filter(todo =>{
          return todo.id !== id
        }),
    ])
  };

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    }
    setTodos([...todos, newTodo]);
  };

  return (
    <>
    {/* <Router>
      
      <Routes >
         <Route exact path='/'> */}
        <Navbar />
        <div className='container'>
            <Header />
            <InputTodo addTodo={addTodoItem} />
            <TodoList todos={todos} handleChangeProps={handleChange} delTodo={delTodo} />
          </div>
        {/* </Route> */}
        {/* <Route path='/about'> */}
          <About />
        {/* </Route> */}
        {/* <Route path='*'> */}
          <NoMatch />
        {/* </Route> */}
      {/* </Routes> */}
       
      {/* </Router> */}
    </>
   
    );
  }

export default TodoContainer;
