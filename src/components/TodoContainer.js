/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import Navbar from './Navbar';
import Footer from './Footer';

const TodoContainer = () =>{
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
   
    return savedTodos || [];
  }
  
  const [todos, setTodos] = useState(getInitialTodos());
  
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

  const setUpdate = (updateTitle,id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id===id){
            todo.title = updateTitle
          }
          return todo
      })
    )
  }

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  return (
    <>
      <Navbar />
      <Header /><div className='container'>
      <Routes >
        <Route exact path='/' element = {
          <>
              <InputTodo addTodo={addTodoItem} />
              <TodoList todos={todos} handleChangeProps={handleChange} delTodo={delTodo} setUpdate={setUpdate} />
          </>
        }>
        </Route>
        <Route path='/about' element={ <About />}>
          
        </Route>
        <Route path='*' element={ <NoMatch />}>
          
        </Route>
      </Routes>
      <Footer />
      </div>
    </>
  
    );
  }

export default TodoContainer;
