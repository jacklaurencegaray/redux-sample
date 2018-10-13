
import React, { Component } from 'react'

export default class AddTodoForm extends Component {

  state = {
    todoContent: ''
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.todoContent)
    this.setState({ todoContent: '' })
  }

  onTodoFormChange = e => this.setState({ todoContent: e.target.value })

  render() {
    return (
        <form onSubmit={this.onFormSubmit}>
            <input 
                type='text' 
                name='todoContent' 
                placeholder='Enter a todo and press enter' 
                value={this.state.todoContent}
                onChange={ this.onTodoFormChange } />
        </form>
    )
  }
}
