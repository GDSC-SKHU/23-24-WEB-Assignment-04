import { useState } from 'react';
// import AddTodo from './AddTodo';
// import TodoItem from './TodoItem';
import ListItem from './ListItem';

function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<ListItem[]>([
    {
      isCheck: false,
      todoTxt: "과제 완료",
    },
    {
      isCheck: true,
      todoTxt: "살려주세요",
    }
  ]);

  const addTodo = () => {
    if (inputText.length !== 0) {
      const newTodo: ListItem = {
        isCheck: false,
        todoTxt: inputText,
      };
      setTodoList([...todoList, newTodo]);
      setInputText("");
    }
  };

  const removeTodo = (index: number) => {
    const removeList = [...todoList];
    removeList.splice(index, 1);
    setTodoList(removeList);
  };

  const toggleCheck = (index: number) => {
    const toggleList = [...todoList];
    toggleList[index].isCheck = !toggleList[index].isCheck;
    setTodoList(toggleList);
  };

  return (
    <div className="Container">
      <p className="Title">
        JiSeop.Park Todo List
      </p>

      <div className="Input">
        <input className="inputText"
          type="text"
          placeholder="오늘 할일은 무엇이 있을까요?"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          // onKeyPress={(e) => { if (e.key === "Enter") addTodo(); }}
        />
        <button className="addButton" onClick={ addTodo }>추가</button>
      </div>
      
      <div className="TodoList">
        {todoList.map((item, index) =>(
          <div className="TodoItem" key={index}>
            <input className="inputCheck"
              type="checkbox"
              checked={item.isCheck}
              onChange={() => toggleCheck(index)}/>
            <span className="TodoText">{ item.todoTxt }</span>
            <button className="removeButton" onClick={() => removeTodo(index)} >삭제</button>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default TodoList;