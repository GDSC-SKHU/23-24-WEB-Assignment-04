import React from 'react'
import type * as types from './types'
import TodoItem from './TodoItem';

type Props = {
  todoList: types.Todo[],
  toggleTodo: types.ToggleTodoFunc,
  deleteTodo: types.DeleteTodoFunc

}

function TodoList({ todoList, toggleTodo, deleteTodo }: Props) {
  const trlist = todoList.map((todo, index) => 
    <TodoItem key={index} todo={todo}  toggleTodo={toggleTodo} deleteTodo={deleteTodo} />);
 
  return (
    <table>      
      <tbody>
        {trlist}
      </tbody>
    </table>
  )
}

export default TodoList
// 할일 목록 화면 컴포넌트