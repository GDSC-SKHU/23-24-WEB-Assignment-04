import React from 'react';
import '../styles/todoContainer.css';

const TodoContainer = ({ input, todolist }) => {
  return (
    <div className="Container">
      <div className="Title">
        JiSeop.Park Todo List
      </div>
      <div className="input-wrapper">
        { input }
      </div>
      <div className="todolist-wrapper">
        { todolist }
      </div>
    </div>
  );
};

export default TodoContainer;