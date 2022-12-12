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
	return (
			<>
				<Header />
				<TodoList todos={this.state.todos} />
			</>
			
		)
  }
}
export default TodoContainer