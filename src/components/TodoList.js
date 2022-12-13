/* eslint-disable */
import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={props.handleChangeProps} delTodo={props.delTodo} setUpdate={props.setUpdate} />
        ))}
      </ul>
    </>
  );
}
    
  


export default TodoList;
