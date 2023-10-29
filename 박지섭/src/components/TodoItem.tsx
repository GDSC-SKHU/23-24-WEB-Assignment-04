import { useState } from "react";
import ListItem from "./ListItem";

function TodoItem() {
  const [todoList, setTodoList] = useState<ListItem[]>([
    {
      isCheck: false,
      todoTxt: "이게 맞는건가",
    },
    {
      isCheck: true,
      todoTxt: "이게되네",
    }
  ]);
  
  const removeTodo = (index: number) => {
    const removeList = [...todoList];
    removeList.splice(index, 1);
    setTodoList(removeList);
  }

  return (
    <div className="TodoList">
      {todoList.map((item, index) =>(
        <div className="TodoItem" key={index}>
          <input className="inputCheck"
            type="checkbox"
            checked={ item.isCheck } />
          <span className="TodoText">{ item.todoTxt }</span>
          <button className="removeButton" onClick={() => removeTodo(index)} >삭제</button>
        </div>
      ))}
    </div> 
  );
}
export default TodoItem;