import React, { useState, useEffect } from 'react';
import { ListItem } from './Interface';
import './App.css';
import $ from 'jquery';

function Component() {
    // useState 2개 정의
    // 1. input 값 관리
    let [InputValue, setInputValue] = useState('');
    // 2. 할 일 목록을 관리
    let [AddList, setAddList] = useState<ListItem[]>([]);

    // 할 일 추가 함수
    let AddTodo = () => {
        if (InputValue) {
            // 입력된 내용을 새로운 할 일로 추가
            setAddList([...AddList, { isCheck: false, todoTxt: InputValue }]);
            // 입력 필드 초기화
            setInputValue('');
        }
    }

    // 할 일 삭제 함수
    let RemoveTodo = (Letter: number) => {
        if (AddList[Letter].isCheck) {
            // 체크된 항목만 제외한 업데이트된 할 일 목록 설정
            setAddList(AddList.filter((_, i) => i !== Letter));
        }
    }

    // 체크박스 업데이트 함수
    let UpdateCbox = (Letter: number) => {
        // 할 일 목록 복사본 생성
        let UpdatedList = [...AddList];
        // 체크 상태 변경 감지
        UpdatedList[Letter].isCheck = !UpdatedList[Letter].isCheck;
        // 목록 업데이트
        setAddList(UpdatedList);

        // 체크박스 상태에 따라 삭제 버튼 활성화/비활성화 하는 함수
        let ButtonActivation = $(`.ButtonActivation${Letter}`);
        ButtonActivation.prop('disabled', !UpdatedList[Letter].isCheck); //체크박스 체크되지 않으면 체크버튼 비활성화
    }

    //  AddList가 업데이트될 때 모든 체크박스를 초기화
    useEffect(() => {
        $('.Cbox').prop('checked', false);
    }, [AddList]);

    return (
        <div>
            <p className="Title">Yuna.I Todo List</p>
            <div className="Input">
                <input
                    type="text"
                    placeholder="오늘의 할 일은 무엇이 있을까요?"
                    value={InputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="AddBtn" onClick={AddTodo}>
                    추가
                </button>
            </div>
            <div className="TodoList">
                {AddList.map((Todo, Letter) => (
                    <div key={Letter} className="TodoItem">
                        <input
                            type="checkbox"
                            id={`CuteChecky${Letter}`}
                            className="Cbox"
                            checked={Todo.isCheck}
                            onChange={() => UpdateCbox(Letter)}
                        />
                        <span className={Todo.isCheck ? 'Checked' : ''}>{Todo.todoTxt}</span>
                        <button
                            className={`ButtonActivation${Letter}`}
                            onClick={() => RemoveTodo(Letter)}
                            disabled={!Todo.isCheck}
                        >
                            삭제
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Component;
