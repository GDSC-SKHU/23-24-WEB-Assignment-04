import React from 'react'
 
import type * as types from './types'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

type Props = {
  todoList: types.Todo[],
  addTodo: types.AddTodoFunc,
  toggleTodo: types.ToggleTodoFunc,
  deleteTodo: types.DeleteTodoFunc

}

function TodoRoot({ todoList, addTodo, toggleTodo, deleteTodo }: Props) {
  return (
    <div className="container">
       <p className="title"> Lynn.kim Todo List</p>
      <TodoInput addTodo={addTodo} />
      <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />     
    </div>
  )
}

export default TodoRoot;
//화면을 담당하는 컴포넌트