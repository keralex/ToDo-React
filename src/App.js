import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo'
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAddToDo(todo) {
    const listToDo = this.state.todos.concat(todo)
    this.setState({
      todos: listToDo
    })
  }
  
  handleRemove(index) {
    this.setState({
      todos:this.state.todos.filter((e,i)=>{
        return i!==index  
      })
    })
  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <Todo todo={todo}  key={i} index={i} onRemove={this.handleRemove} />
      ) 
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="text-white ">tasks
            {this.state.todos && (
              <span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span>
            )}
          </a>

        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddToDo={this.handleAddToDo}></TodoForm>
            </div>
            {this.state.todos && todos}
          </div>
        </div>


      </div>
    );
  }
}

export default App;
