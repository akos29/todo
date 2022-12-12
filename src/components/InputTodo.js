/* eslint-disable */
import React, { Component } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { IconContext } from 'react-icons';

export default class InputTodo extends Component {
  state = {
	  title: '',
  };

  onChange = (e) => {
	  this.setState({
	    [e.target.name]: e.target.value,
	  });
  };

  handleSubmit = (e) => {
	  e.preventDefault();
	  if (this.state.title.trim() !== '') {
	    this.props.addTodo(this.state.title);
	    this.setState({
	      title: '',
	    });
	  } else {
	    alert('Please add Todo Item');
	  }
  };

  render() {
	  return (
  <form className="form-container" onSubmit={this.handleSubmit}>
    <input type="text" name="title" className="input-text" value={this.state.title} placeholder="Add Todo..." onChange={this.onChange} />
    <button className="input-submit"><FaPlusCircle /></button>
  </form>
	  );
  }
}
