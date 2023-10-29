import React from 'react';

interface TodoListProps {
  todos: { isCheck: boolean; todoTxt: string }[];
  onToggle: (index: number) => void;
  onRemove: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className={`todo-item ${todo.isCheck ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={todo.isCheck}
            onChange={() => onToggle(index)}
          />
          <span>{todo.todoTxt}</span>
          <button className="remove-button" onClick={() => onRemove(index)}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
