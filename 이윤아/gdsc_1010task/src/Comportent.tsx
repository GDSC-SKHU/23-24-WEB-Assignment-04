import React, { useState } from 'react';
import { ListItem } from './Interface';
import './App.css';
import $ from 'jquery';

function Comportent() {
    // useState 2개 정의
    // 1. input 값 관리
    const [inputValue, setInputValue] = useState('');
    // 2. 할일을 리스트 목록으로 담음
    const [NewList, setNewList] = useState<ListItem[]>([]);

    // 할일 추가
    const addTodo = () => {
        if (inputValue) {
            const newTodo: ListItem = {
                isCheck: false,
                todoTxt: inputValue,
            };
            setNewList([...NewList, newTodo]);
            setInputValue('');
        }
    }
    //할 일 삭제
    let removeTodo = (index: number) => {
        let todoToRemove = NewList[index];
    
        if (todoToRemove.isCheck) {
            const updatedList = NewList.filter((_, i) => i !== index);
            setNewList(updatedList);
        }
    }
     // 삭제후 업데이트
     let updateCheckBox = (index: number) => {
        let updatedList = [...NewList];
        updatedList[index].isCheck = !updatedList[index].isCheck;
        setNewList(updatedList);

        // 체크박스의 상태에 따라 삭제 버튼 활성화/비활성화
        let removeButton = $(`.RemoveBtn${index}`);
        removeButton.prop('disabled', !updatedList[index].isCheck);
    }

    return (
        <div>
            <p className="Title">Yuna.I Todo List</p>
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
                            id={`CuteChecky${InDex}`}
                            onChange={() => updateCheckBox(InDex)}
                        />
                        <span className={ToDo.isCheck ? 'Checked' : ''}>{ToDo.todoTxt}</span>
                        <button
                            className={`RemoveBtn${InDex}`}
                            onClick={() => removeTodo(InDex)}
                            disabled={!ToDo.isCheck}
                        >
                            삭제
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comportent;

