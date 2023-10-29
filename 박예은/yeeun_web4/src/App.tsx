import { useState } from 'react';
import './App.css';

type ListItem = {
  isCheck : boolean;
  todoTxt : string;
};

function App() {

  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState<ListItem[]>([]);

  const todoInput = () => {

    if (inputValue.length !== 0) {

      setTodoList(pastTodoList => pastTodoList.concat({

        isCheck: false,
        todoTxt: inputValue

      }));

      setInputValue('');

    }
  };

  const check = (index: number) => {

    const todoListCopy = Array.from(todoList);
    const todoItemCopy = Object.assign({}, todoListCopy[index]);
    todoItemCopy.isCheck = !todoItemCopy.isCheck;
    todoListCopy[index] = todoItemCopy;

    setTodoList(todoListCopy);

  };
  
  
  const inputRemove = (index: number) => {

    const todoListCopy = Array.from(todoList);
    todoListCopy.splice(index, 1);

    setTodoList(todoListCopy);

  };
  
  return(
    <div id='root'>

      <div id='Container'>

        <p className='Title'>yeeun.park Todo List</p>

        <div className='Input'>
          <input type="text" className='writeTodo' value={inputValue} onChange={(e) => setInputValue(e.target.value)}placeholder='오늘 할 일은 무엇이 있을까요?' />
          <button onClick={todoInput}>추가</button>
        </div>

        <div className='TodoList'>
          {todoList.map((todo, index) => (
            <div key={index} className='todoIndex'>
              <input className='todoValue' type="checkbox" checked={todo.isCheck} onChange={() => check(index)}/>
              <span>{todo.todoTxt}</span>
              <button className='Remove' onClick={()=>inputRemove(index)}>삭제</button>
            </div>

          ))}

        
        </div>

      </div>

    </div>
  )
};

export default App;
