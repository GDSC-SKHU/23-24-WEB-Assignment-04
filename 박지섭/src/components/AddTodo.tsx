function AddTodo() {
  return (
    <div className="Input">
      <input className="inputText" type="text" placeholder="오늘 할일은 무엇이 있을까요?" />
      <button className="addButton">추가</button>
    </div>
  );
}

export default AddTodo;