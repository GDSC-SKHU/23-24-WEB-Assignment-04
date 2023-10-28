import React, { ChangeEvent, useState } from 'react'
import type * as types from './types'

type Props = {
  addTodo : types.AddTodoFunc
}

function TodoInput({ addTodo }: Props) {
  const [title, setTitle] = useState<string>('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onClickadd = () => { addTodo(title); setTitle(''); }
  return (
    <div className='input'>
      <input className='ininput' placeholder="오늘 할일은 무엇이 있을까요?" type='text' value={title} onChange={onChange} />
      <button onClick={onClickadd}>추가</button>
    </div>
  )
}

export default TodoInput
// 할일 입력 화면 컴포넌트