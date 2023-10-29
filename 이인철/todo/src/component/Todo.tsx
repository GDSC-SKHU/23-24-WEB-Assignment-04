import React from "react";
import '/src/App.css';


const Todo = (props)=>{
    const deleteItem =()=>{
        props.onDelete(props.item);
    };
    return(
        <>
        <hr/>
       <div className="todolist">

            <input type="checkbox" className="check">
            </input>
            <p className="todoitem">{props.item}</p>
            <button className="but2" onClick={deleteItem}>삭제</button>
            </div>
        </>

    )
}
export default Todo;