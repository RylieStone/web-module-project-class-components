import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className='todo' onClick={() => this.props.handleCompleted(this.props.todo)}>
        {this.props.todo.name} {this.props.todo.completed && '✔'}
      </div>
    )
  }
}
