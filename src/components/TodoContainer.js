/* eslint-disable */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
	state = {
	  todos: [
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
	  ],
	}

	render() {
	  const handleChange = (id) => {
	    this.setState((prevState) => ({
	      todos: this.state.todos.map((todo) => {
	        if (todo.id === id) {
	          return {
	            ...todo,
	            completed: !todo.completed,
	          };
	        }
	        return todo;
	      }),
	    }));
	  };

	  const delTodo = (id) => {
	    this.setState({
	      todos: [
	        ...this.state.todos.filter((todo) => todo.id !== id),
	      ],
	    });
	  };

	  const addTodoItem = (title) => {
	    const newTodo = {
	      id: uuidv4(),
	      title,
	      completed: false,
	    };

	    this.setState({
	      todos: [...this.state.todos, newTodo],
	    });
	  };

	  return (
  <>
    <Header />
    <InputTodo addTodo={addTodoItem} />
    <TodoList todos={this.state.todos} handleChangeProps={handleChange} delTodo={delTodo} />
  </>
	  );
	}
}
export default TodoContainer;
