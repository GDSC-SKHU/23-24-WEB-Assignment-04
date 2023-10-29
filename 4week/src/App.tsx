import React, { useState } from 'react';
import './App.css';
import { ListItem } from './interface';

function App() {
  const [todoList, setTodoList] = useState<ListItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem: ListItem = {
        todoTxt: newTodo,
        isCheck: true
      };
      setTodoList([...todoList, newTodoItem]);
      setNewTodo('');
    }
  };

  const toggleCheck = (index: number) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].isCheck = !updatedTodoList[index].isCheck;
    setTodoList(updatedTodoList);
  };

  const removeTodo = (index: number) => {
    const updatedTodoList = [...todoList];
    if (!updatedTodoList[index].isCheck) {
      updatedTodoList.splice(index, 1);
      setTodoList(updatedTodoList);
    }
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="Title">jiwon lee's Todo List</div>
        <div className="Input">
          <input
            className='input_1'
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="오늘의 할 일은 무엇이 있을까요?"
          />
          <button className="button_1" onClick={addTodo}>추가</button>
        </div>
        <div className="TodoList">
          {todoList.map((todo, index) => (
            <div className="TodoItem" key={index}>
              <input
                className='check'
                type="checkbox"
                checked={todo.isCheck}
                onChange={() => toggleCheck(index)}
              />
              <span>{todo.todoTxt}</span>
              <button className='button_2' onClick={() => removeTodo(index)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
