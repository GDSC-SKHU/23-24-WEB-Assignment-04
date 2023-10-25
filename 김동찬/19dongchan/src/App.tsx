import { useState } from 'react';
import './App.css';


export type ListItem = {
  isCheck: boolean;
  todoTxt: string;
};

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [todoList, setTodoList] = useState<ListItem[]>([]);

  const addTodo = () => {
    if (inputValue.length !== 0) {
      const todo: ListItem = {
        isCheck: false,
        todoTxt: inputValue,
      };
      setTodoList([...todoList, todo]);
      setInputValue('');
    }
  };

  const removeTodo = (index: number) => {
    const newTodoList = [...todoList];
    if (newTodoList[index].isCheck) {
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    }
  };

  const checkTodo = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList[index].isCheck = !newTodoList[index].isCheck;
    setTodoList(newTodoList);
  };

  return (
    <div id="root">
      <div className="Container">
        <p className="Title">Dongchan.Kim ToDo List</p>
        
        <div className="Input">
          <input
            className='textInput'
            type="text"
            value={inputValue}
            placeholder="오늘 할일은 무엇이 있을까요?"
            onChange={(event) => setInputValue(event.target.value)} />
          <button onClick={addTodo}>추가</button>
        </div>

        <div className="TodoList">
          {todoList.map((todo, index) => (
            <div className='todoItem' key={index}>
              <div className="todoItemContent">
                <input
                  type="checkbox"
                  checked={todo.isCheck}
                  onChange={() => checkTodo(index)} />
                <span>{todo.todoTxt}</span>
              </div>
              <button className="Remove" onClick={() => removeTodo(index)}>삭제</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
