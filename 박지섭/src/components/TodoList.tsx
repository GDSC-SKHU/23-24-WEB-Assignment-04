import { useState } from 'react';
import ListItem from './ListItem';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function TodoList() {
  const [todoList, setTodoList] = useState<ListItem[]>([]);

  return (
    <div className="Container">
      <p className="Title">
        JiSeop.Park Todo List
      </p>
      <AddTodo />
      <TodoItem />
    </div>
  );
}

export default TodoList;