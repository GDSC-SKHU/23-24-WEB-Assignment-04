import { useState } from 'react';
import ListItem from './ListItem';
import AddTodo from './AddTodo';

function TodoList() {
  const [todoList, setTodoList] = useState<ListItem[]>([]);

  return (
    <div className="Container">
      <p className="Title">
        JiSeop.Park Todo List
      </p>
      <AddTodo />
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
  );
}

export default TodoList;