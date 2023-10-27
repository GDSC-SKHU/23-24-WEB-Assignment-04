// import React, { Component } from 'react';
// import TodoContainer from './components/TodoContainer';
// import TodoForm from "./components/TodoForm";
import './App.css';

function App() {
  return (
    <div className="root">
      <div className="Container">
        <p className="Title">
          JiSeop.Park Todo List
        </p>
        <div className="Input">
          <input className="inputText" type="text" placeholder="오늘 할일은 무엇이 있을까요?" />
          <button className="addButton">추가</button>
        </div>
        <div className="TodoList">
          <div className="TodoItem">
            <input className="inputCheck" type="checkbox" />
            <span className="TodoText">살려주세요</span>
            <button className="removeButton">삭제</button>
          </div>
          <div className="TodoItem">
            <input className="inputCheck" type="checkbox" />
            <span className="TodoText">살려주세요</span>
            <button className="removeButton">삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
