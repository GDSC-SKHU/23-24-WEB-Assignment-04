import React from "react";
import "../styles/TodoForm.css";

const inputtest = ({ value, onChange, onCreate }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} />
      <div className="addButton" onClick={onCreate}>추가</div>
    </div>
  );
};

export default inputtest;