import React, { useState } from 'react';
import './App.css';

interface TodoItem {
  isCheck: boolean;
  todoTxt: string;
}

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const handleAdd = () => {
    setTodoList([...todoList, { isCheck: false, todoTxt: inputValue }]);
    setInputValue('');
  };

  const handleRemove = () => {
    const newList = todoList.filter((item) => !item.isCheck);
    setTodoList(newList);
  };
  

  return (
    <div className="Container">
      <div className="Title">
        <p>Wooyong's Todo List</p>
      </div>
      <div className="Input">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>추가</button>
      </div>
      <div className="TodoList">
        {todoList.map((item, index) => (
          <div key={index}>
            <input 
              type="checkbox" 
              checked={item.isCheck} 
              onChange={() => {
                const newList = [...todoList];
                newList[index].isCheck = !newList[index].isCheck;
                setTodoList(newList);
              }}
            />
            {item.todoTxt}
            <button className="Remove" onClick={() => handleRemove(index)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
