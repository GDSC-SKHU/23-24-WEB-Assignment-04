import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<{ id: number; todoTxt: string; isCheck: boolean }[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const removeTodo = (id: number) => {
    setTodoList(todoList.filter(todoItem => todoItem.id !== id));
}

  const addTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(text === ""){
      return
    }
    const nextTodoList = [
      ...todoList,
      { id: todoList.length, todoTxt: text, isCheck:false}
    ];
    setText("");
    setTodoList(nextTodoList);
};

  return (
    <div id="root">
      <div className="Container">
        <p className="Title">
          <strong>Manjae.Lee Todo List</strong>
        </p>
        <div className="input">
          <input type="text" placeholder="오늘 할일은 무엇이 있을까요?" onChange={onChangeInput} value={text}/>
          <button onClick={addTodo}>추가</button>
        </div>
        <div className="TodoList">
          {todoList.map((todoItem) => (
            <div key={todoItem.id}>
              <input className="checkbox" type="checkbox"/>
              <span>{todoItem.todoTxt}</span>
              <button className="Remove" onClick={() => removeTodo(todoItem.id)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
