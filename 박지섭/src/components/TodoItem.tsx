function TodoItem() {
  return (
    <div className="TodoList">
      <div className="TodoItem">
        <input className="inputCheck" type="checkbox" />
        <span className="TodoText">살려주세요</span>
        <button className="removeButton">삭제</button>
      </div>
      <div className="TodoItem">
        <input className="inputCheck" type="checkbox" />
        <span className="TodoText">살려주세요</span>
        <button className="removeButton">삭제</button>
      </div>
    </div>
  );
}
export default TodoItem;