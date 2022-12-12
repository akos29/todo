import React, { Component } from 'react'

export default class TodoItem extends Component {
	render() {
		return (
		<>
			<li><input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(this.props.todo.id)}/> {this.props.todo.title} <button onClick={()=> this.props.delTodo(this.props.todo.id)}>Delete</button></li>
		</>

		)
	}
}
