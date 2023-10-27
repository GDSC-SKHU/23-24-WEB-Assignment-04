import React, { useState } from 'react';
import { ListItem } from './Interface';
import './App.tsx';

function Comportent() {
    // useState 2개 정의
    // 1. input 값 관리
    let [inputValue, setInputValue] = useState('');
    // 2. 할일을 리스트 목록으로 담음
    let [NewList, setNewList] = useState<ListItem[]>([]);

    // 할 일을 추가하는 함수
    let addTodo = () => {
        if (inputValue) {
            const newTodo: ListItem = {
                isCheck: false,
                todoTxt: inputValue,
            };
            setNewList([...NewList, newTodo]);  // 함수 사용시 값 변화
            setInputValue(''); // 초기화
        }
    };

    // 할일을 삭제하는 함수
    let removeTodo = (index: number) => {
        let updatedList = [...NewList];
        updatedList.splice(index, 1);
        setNewList(updatedList); // 함수 사용시 값 변화
    };

    return (
        <div>
            <p className="Title">Yuna.I&nbsp; &nbsp;Todo List</p>

            <div className="Input">
                <input
                    type="text"
                    placeholder="오늘의 할 일은 무엇이 있을까요?"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="AddBtn" onClick={addTodo}>
                    추가
                </button>
            </div>
            <div className="TodoList">
                {NewList.map((ToDo, InDex) => (
                    <div key={InDex} className="TodoItem">
                        <input
                            type="checkbox"
                            checked={ToDo.isCheck}
                            onChange={() => {
                                let UpdateList = [...NewList];
                                UpdateList[InDex].isCheck = !ToDo.isCheck;
                                setNewList(UpdateList);
                            }}
                        />
                        <span className={ToDo.isCheck ? 'Checked' : ''}>{ToDo.todoTxt}</span>
                        <button className="RemoveBtn" onClick={() => removeTodo(InDex)}>
                            삭제
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Comportent;
