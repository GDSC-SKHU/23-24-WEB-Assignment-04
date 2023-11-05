import './App.css'
import { useState } from 'react';

function App() {
  const [toDo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return
    }
    setList((list) =>[toDo, ...list])
    setTodo("")
  }
  const onDelete = (id) => {
    setList(list.filter(toDo=>
      toDo.id !== id
    ));
  };
  
  return (
  <div id="root">
    <div className="Container">
      <p className="Title">Bogyu.Kim Todo List</p>
      <form onSubmit={onSubmit}>
        <div className="Input">
          <input type="text" placeholder="오늘 할일은 무엇이 있을까요?" onChange={onChange} value={toDo}/>
          <button id='button' type='submit'>추가</button>
        </div>
        <ul>
        {list.map((item)=><li>{item}</li>)}
        </ul>
        <button type='button' className='deleteBtn' onClick={() => onDelete(toDo.id)}
>X</button>
      </form>
    </div>
  </div>
  )
}


export default App
