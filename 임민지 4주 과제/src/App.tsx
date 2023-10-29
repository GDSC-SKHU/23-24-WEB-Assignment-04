import { useState } from 'react';
import './App.css';

export type Todo = {
  isCheck: boolean;
  todoTxt: string;
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addItem = () => {
    if (inputValue) {
      const newTodo: Todo = {
        isCheck: false,
        todoTxt: inputValue,
      };
      //기존 아이템 유지 새로운 inputValue넣기
      setTodoList([...todoList, newTodo]);
      //입력값 초기화
      setInputValue('');
    }
  };

  const handleDelete = (index:number) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  const handleToggleTodo = (index:number) =>{
    const newList = [...todoList];
    newList[index].isCheck =!newList[index].isCheck;
    setTodoList(newList)
  };

  return (
    <div id='root'>
      <div className='Container'>
        <p className='Title'>Minji.Lim Todo List</p>
        <div className='Input'>
          <input value={inputValue} className='inputTodo' type='text' placeholder='오늘 할일은 무엇이 있을까요?'
            onChange={(event) => setInputValue(event.target.value)}>
          </input>
          <button className='addBtn' onClick={addItem}>
            추가
          </button>
        </div>

        <div className='TodoList'>
          {/*map은 todoList(array 값을 가져와서 )*/}
          {todoList.map((todo, index) => (<div className='todoItem'key={index}>
            <div className='todoBox'>
              <input type='checkbox'checked={todo.isCheck} onChange={() => handleToggleTodo(index)}
              />
              <span>{todo.todoTxt}</span>
            </div>
              <button className='Remove' onClick={() => handleDelete(index)}>
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;