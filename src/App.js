import React, { Component, Fragment } from 'react'
import { addTodo } from './actions/todo.action'
import { connect } from 'react-redux'

import AddTodoForm from './components/AddTodoForm'

class App extends Component {

  addTodo = todoContent => this.props.addTodo(todoContent)

  render() {
    return (
      <Fragment>
        <AddTodoForm addTodo={this.addTodo} />
        <br />
        <div>
        { this.props.todos? 
          this.props.todos.map((todo, idx) => <p key={idx}>active: {todo.content}</p>)
          : <p>There are no todos at the moment.</p> }
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  addTodo: todoContent => dispatch(addTodo(todoContent))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
