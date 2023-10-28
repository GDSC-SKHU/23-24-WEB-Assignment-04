import React from "react";
import Todo from "./Todo";
import '/src/App.css';

interface Todo1Props {
    todoList: string[];
    onDeleteItem: (item: string) => void;
}

const Todo1: React.FC<Todo1Props> = (props) => {
    return (
        <>
        {props.todoList.map((item, index)=><Todo key={index} item={item} onDelete={props.onDeleteItem}/>)}
            
        </>
    );
}

export default Todo1;
