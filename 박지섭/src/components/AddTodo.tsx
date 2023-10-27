import { useState } from "react";
import ListItem from "./ListItem";

function AddTodo() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<ListItem[]>([]);

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

  return (
    <div className="Input">
      <input className="inputText"
        type="text"
        placeholder="오늘 할일은 무엇이 있을까요?"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="addButton" onClick={ addTodo }>추가</button>
    </div>
  );
}

export default AddTodo;