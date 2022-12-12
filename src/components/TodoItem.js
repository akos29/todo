import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import style from './TodoItem.module.css';
/* eslint-disable */
export default class TodoItem extends Component {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const handleEdit = () => {
      console.log("first");
    };

    const { completed, id, title } = this.props.todo;
    return (
      <>
        <li className={style.item}>
          <input className={style.checkbox} type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)} />
          <span style={completed ? completedStyle : null} onDoubleClick={handleEdit}>
            {title}
          </span>
          <button className={style.trash} onClick={() => this.props.delTodo(id)}><FaTrash /></button>
        </li>
      </>

    );
  }
}
