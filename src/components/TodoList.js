/* eslint-disable */
import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={props.handleChangeProps} delTodo={props.delTodo} />
        ))}
      </ul>
    </div>
  );
}
    
  


export default TodoList;
