import React, { Component } from 'react'
import style from "./TodoItem.module.css"

export default class TodoItem extends Component {
	render() {
		const completedStyle = {
			fontStyle: "italic",
			color: "#595959",
			opacity: 0.4,
			textDecoration: "line-through",
			}
	
			const {completed, id, title} = this.props.todo;
		return (
		<>
			<li className={style.item}>
				<input className={style.checkbox} type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)}/> 
				<span style={completed? completedStyle : null}>{title} </span>  
				<button onClick={()=> this.props.delTodo(id)}>Delete</button></li>
		</>

		)
	}
}
