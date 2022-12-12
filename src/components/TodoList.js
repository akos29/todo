/* eslint-disable */
import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

export class TodList extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} delTodo={this.props.delTodo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodList;
