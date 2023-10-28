import React,{ useState } from "react";
import Todo1 from "./component/Todo1";
import Todo from "./component/Todo";
import './App.css';
const App = ()=>{
    const [inputValue,setInputValue] = useState('');
    const [todoList,settodoList] = useState<string[]>([]);
    const addItem =()=>{
        const updatedList = [...todoList, inputValue];
        settodoList(updatedList);
        setInputValue('');
        
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const handleDeleteItem =(itemToDelete)=>{
        const updatedList = todoList.filter(item => item !== itemToDelete);
        settodoList(updatedList);
    }

    return(
        <>
        <div className="root">
            <div className="container">
                <div className="titleName"><h1 className="titlep">InCheol.Lee ToDo List</h1></div>
                <div className="input1">
                    <input className="inputtag" type="text" value={inputValue} onChange={handleInputChange} placeholder="오늘 할일은 무엇이 있을까요?"/>
                    <button onClick={addItem} className="but">추가</button>
                </div>
                <br/>
                <Todo1 todoList={todoList} onDeleteItem={handleDeleteItem} />
            </div>
        </div>
        </>
    );

}
export default App