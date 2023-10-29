import { useState } from 'react'
import './App.css'

type listType = {
  isCheck: boolean,
  todoTxt: string
}

function App() {
  const [btnValue, setBtnValue] = useState<string>();
  const [list, setList] = useState<Array<listType>>([]);

  const onClickAddTodoBtn = () => {
    if (!btnValue) {
      return;
    }
    setList((prevList) => [
      ...prevList,
      { todoTxt: btnValue, isCheck: false }
    ]);
    setBtnValue("");
  }

  const onClickDeleteTodoBtn = (index: number) => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  }

  const onClickCheckdbtn = (index: number) => {
    const updatedList = [...list];
    updatedList[index].isCheck = !updatedList[index].isCheck;
    setList(updatedList);
  }

  return (
    <div className="Container">
      <p className="Title">jjg todo list</p>
      <div className="Input">
        <input className="Todoinput" value={btnValue} placeholder='오늘 할일은 무엇이 있을까요?' onChange={(e) => setBtnValue(e.target.value)} />
        <button className="AddBtn" onClick={onClickAddTodoBtn}>추가</button>
      </div>
      <div className="Todolist">
        <ul>
          {list?.map(({ todoTxt, isCheck }: listType, index) => (
            <li className="TodoLi" key={`li${index}`} >
              <input type="checkbox" checked={isCheck} onChange={() => onClickCheckdbtn(index)} />
              <p>{todoTxt}</p>
              <button className="RemoveBtn" onClick={() => onClickDeleteTodoBtn(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

}

export default App
