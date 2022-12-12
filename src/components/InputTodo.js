import React, { Component } from 'react'

export class InputTodo extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder='Add Todo...' />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo