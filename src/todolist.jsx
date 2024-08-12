import React, { useState } from "react";
import DigitalClock from "./clock";
import './assets/css/todolist.css'
const TodoList = () => {
  const [text, setText] = useState();
  const [array, setArray] = useState([]);
  function handleText(e) {
    setText(e.target.value);
    console.log(text);
  }
  function handleSubmit() {
    const newarray = text;
    console.log(newarray);
    setArray((a) => [...a, newarray]);
    setText("");
  }
  function handleDelete(index) {
    setArray(array.filter((_, i) => i !== index));
  }
  function handleUp(index) {
             if(index!=0){
              const uparray = [...array]
              var a = uparray[index];
              var b = uparray[index-1]
              uparray[index] = b;
              uparray[index-1] = a;
              setArray(uparray);
             }    
  }
  function handleDown(index) {
    if(index!=array.length-1){
      const downarray = [...array]
      var a = downarray[index];
      var b = downarray[index+1]
      downarray[index] = b;
      downarray[index+1] = a;
      setArray(downarray);   
     }     
  }
  return (
    <div className="container">
      <center><h1 id="white">To Do List</h1></center>
<div className="center">
<input className="inp" type="text" value={text} onChange={(e) => handleText(e)} />
<button className="button" onClick={() => handleSubmit()}>Add Task</button>
</div>
<div className="center">
  
<ol className="ol" >
        {array.map((tasks, index) => (
          <li className="list" key={index}>
            {" "}
          <div className="flex">
          <div>
            {tasks}
            </div>
    
            <div className="a">
            <button  onClick={() => handleDelete(index)}>❌</button>{" "}
            <button onClick={()=>handleUp(index)}  >👆 </button>
            <button onClick={()=>handleDown(index)} >👇</button>
            </div>
          </div>

          </li>
        ))}
      </ol>
</div>

    
    </div>
  );
};

export default TodoList;
