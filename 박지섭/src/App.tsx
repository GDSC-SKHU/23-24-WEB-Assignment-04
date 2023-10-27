import React, { Component } from 'react';
import './App.css'
import TodoContainer from './components/TodoContainer';
import TodoForm from "./components/TodoForm";

class App extends Component {
  render() {
    return (
      <TodoContainer form={<TodoForm/>}>
        이게맞나
      </TodoContainer>
    );
  }
}

export default App;
