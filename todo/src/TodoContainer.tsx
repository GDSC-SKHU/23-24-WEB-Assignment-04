import React, { useState } from 'react'
import type * as types from './types'
import TodoRoot from './TodoRoot';

function TodoContainer() {
  const [todoList, setTodoList] = useState<types.Todo[]>([]);

  const addTodo : types.AddTodoFunc = (todoTxt: string) => {
     const todo = {todoTxt: todoTxt, isCheck: false}
    setTodoList([...todoList, todo]);
  }

  const toggleTodo: types.ToggleTodoFunc = (todo: types.Todo) => {
    const newTodos = [...todoList];
    const index = newTodos.findIndex(t => t === todo);
    if (index !== -1) {
      newTodos[index].isCheck = !newTodos[index].isCheck;
      setTodoList(newTodos);
    }
  };

  const deleteTodo: types.DeleteTodoFunc = (todo: types.Todo) => {
    const newTodos = todoList.filter(t => t !== todo);
    setTodoList(newTodos);
  };
  
  return <TodoRoot todoList={todoList} 
                   addTodo={addTodo} 
                   toggleTodo={toggleTodo} 
                   deleteTodo={deleteTodo} />;
}

export default TodoContainer