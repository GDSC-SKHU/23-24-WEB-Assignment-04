import React from 'react'
import type * as types from './types'

type Props = {
  todo: types.Todo,
  toggleTodo: (todo: types.Todo) => void,
  deleteTodo: (todo: types.Todo )=> void
}

function TodoItem({ todo, toggleTodo, deleteTodo }: Props) {
  const onChange = () => toggleTodo(todo)
  const onClick = () => {
    if (window.confirm('삭제하시겠습니까?'))
      deleteTodo(todo)
  }
  return (
    <div className='TodoList'>
    <hr />
    <div className={ todo.isCheck ? "isCheck" : "" }>      
       
        <input type='checkbox' checked={ todo.isCheck } onChange={onChange} />
        { todo.todoTxt } 
        
        <button onClick={onClick} className='Remove' disabled={!todo.isCheck }>삭제</button>
      
    </div>
    </div>
  )
}

export default TodoItem;
//할일 한 개 화면 컴포넌트