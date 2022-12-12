	import React from "react"
	import TodoList from "./TodoList"
	import Header from "./Header"
	class TodoContainer extends React.Component {
		state = {
			todos:[
				{
						id: 1,
						title: "Setup Development for Restaurant Development Environment",
						completed: true
				},
				{
						id: 2,
						title: "Develop website with the provided colors",
						completed: false
				},
				{
						id: 3,
						title: "Deploy to live server",
						completed: false
				},
				
			],
		}
	render() {
		const handleChange = id => {
			this.setState(prevState =>({
				todos: this.state.todos.map(todo => {
				if(todo.id===id) {
					return {
						...todo,
					completed: !todo.completed,
					}
				}
				return todo;
			})
			})
			)
		};

		const delTodo = id => {
			this.setState({
				todos: [
					...this.state.todos.filter(todo =>{
						return todo.id !== id;
					})
				]
			})
		};

	return (
			<>
				<Header />
				<TodoList todos={this.state.todos} handleChangeProps={handleChange} delTodo={delTodo} />
			</>
			
		)
	}
	}
	export default TodoContainer