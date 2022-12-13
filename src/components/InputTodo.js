/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim() !== '') {
      props.addTodo(inputText.title.trim());
      setInputText({
        title: '',
      });
    } else {
      alert('Please add Todo Item');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="text" name="title" className="input-text" value={inputText.title} placeholder="Add Todo..." onChange={onChange} />
      <button type="submit" className="input-submit"><FaPlusCircle /></button>
    </form>
  );
};

export default InputTodo;
