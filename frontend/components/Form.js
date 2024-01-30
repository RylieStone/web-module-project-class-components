import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type='text' placeholder='Type a Todo here' onChange={this.props.handleChanges} value={this.props.formValue}/>
          <button type='submit'>Submit</button>
        </form>
        <button onClick={() => this.props.showB()}>{this.props.show ? 'Hide completed' : 'Show completed'}</button>
      </div>
    )
  }
}
