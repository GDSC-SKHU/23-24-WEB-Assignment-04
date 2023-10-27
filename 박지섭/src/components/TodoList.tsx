import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function TodoList() {
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