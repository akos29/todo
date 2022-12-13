import React from 'react';
import { FaTrash } from 'react-icons/fa';
import style from './TodoItem.module.css';
/* eslint-disable */
const TodoItem = (props) => {

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEdit = () => {
    console.log("first");
  };

  const { completed, id, title } = props.todo;
  return (
    <>
      <li className={style.item}>
        <input className={style.checkbox} type="checkbox" checked={completed} onChange={() => props.handleChangeProps(id)} />
        <span style={completed ? completedStyle : null} onDoubleClick={handleEdit}>
          {title}
        </span>
        <button className={style.trash} onClick={() => props.delTodo(id)}><FaTrash /></button>
      </li>
    </>

  );
}

export default TodoItem;