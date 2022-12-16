import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import style from './TodoItem.module.css';
/* eslint-disable */
const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEdit = () => {
    setEditing(true)
  };

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  const { completed, id, title } = props.todo;

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  return (
    <>
      <li className={style.item}>
        <div onDoubleClick={handleEdit} style={viewMode}>
          <input className={style.checkbox} type="checkbox" checked={completed} onChange={() => props.handleChangeProps(id)} />
        <span style={completed ? completedStyle : null} >
          {title}
        </span>
        <button className={style.trash} onClick={() => props.delTodo(id)}><FaTrash /></button>
        </div>
        
        <input type="text" style={editMode} className={style.textInput} value={title}    onChange={e => { props.setUpdate(e.target.value, id) }} onKeyDown={handleUpdatedDone} />
      </li>
    </>

  );
}

export default TodoItem;