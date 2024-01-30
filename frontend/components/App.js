import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      formValue: '',
      todos: [],
      showAll: true
    }
  }
  handleChanges = e => {
    this.setState({...this.state, formValue: e.target.value})
  }
  handleSubmit = e => {
    e.preventDefault()
    this.state.todos.push({
      name: this.state.formValue,
      id: Date.now(),
      completed: false
    })
    this.setState({...this.state, formValue: ''})
  }
  handleCompleted = todo => {
    todo.completed = !todo.completed
    this.setState({...this.state})
  }
  changeShow = () => {
    this.setState({...this.state, showAll: !this.state.showAll})
  }
  render() {
    return (
      <div>
        <TodoList todos={!this.state.showAll ? this.state.todos.filter(todo => todo.completed === false) : this.state.todos} handleCompleted={this.handleCompleted} show={this.state.showAll}/>
        <Form handleChanges={this.handleChanges} handleSubmit={this.handleSubmit} formValue={this.state.formValue} showB={this.changeShow} show={this.state.showAll}/>
      </div>
    )
  }
}
