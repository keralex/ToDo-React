import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import { todos } from './todo.json';
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  handleAddToDo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    
    })
  }
  handleRemove(index){
    console.log(index);
    this.setState({
      todos:this.state.todos.filter((e,i)=>{
        return i!==index  
      })
    })
  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badgepill badge-danger ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger"
              onClick={this.handleRemove.bind(this,i)}>
                delete
              </button>
            </div>
          </div>
        </div>


      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="text-white ">tasks
           <span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span>
          </a>

        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddToDo={this.handleAddToDo}></TodoForm>
            </div>
            {todos}
          </div>
        </div>


      </div>
    );
  }
}

export default App;
