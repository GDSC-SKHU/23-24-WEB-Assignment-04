import React, { useState } from 'react';
import './App.css';
import TodoList from '../components/TodoList';
import InputField from '../components/InputField';

function App() {
  const [todos, setTodos] = useState<{ isCheck: boolean; todoTxt: string }[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { isCheck: false, todoTxt: inputValue }]);
      setInputValue('');
    }
  };

  const toggleTodo = (index: number) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isCheck: !todo.isCheck } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (index: number) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <div className="title">
        <h1>Juha.Kim Todo List</h1>
      </div>
      <div className="input-field">
        <InputField
          inputValue={inputValue}
          onInputChange={(e) => setInputValue(e.target.value)}
          onAdd={addTodo}
        />
      </div>
      <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
    </div>
  );
}

export default App;
