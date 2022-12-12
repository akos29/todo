import React, { Component } from 'react'

export default class TodoItem extends Component {
	render() {
		return (
		<>
			<li>{this.props.todo.title}</li>
			<li>{this.props.todo.com}</li>
		</>

		)
	}
}
