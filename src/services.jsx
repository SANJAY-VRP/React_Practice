import React, { useState } from "react";

function Services(){
    const imageurl = './src/assets/react.svg';
    let count = 0;
    const handleClick = (name)=>{
        

        if(count>3){
            console.log(name + " stop clicking me 😀" )
        }
        else{
            count++;
            console.log("you clicked me " + count + " times")
        }

    }
    const handleEvent = (e)=>{
        e.target.textContent = "ouch ☹️" ;
    }
    const hide = (e)=>{
        e.target.style.display = "none" ;
    }

    
    const [students , setStudents] =  useState({
        name : "sanjay",
        age :22 ,
        marks : 99 ,
        fathername : "vijayakumar"
    })
  const handleNameChange = (e)=>{
    setStudents( s => ({...s,name : e.target.value}));
  }
  const handleAgeChange = (e)=>{
    setStudents( s => ({...s,age : e.target.value}));
  }
  const handleMarksChange = (e)=>{
    setStudents( s => ({...s,marks : e.target.value}));
  }
  const handleFatherNameChange = (e)=>{
    setStudents( s => ({...s,fathername : e.target.value}));
  }
 

   const [list , setList] =  useState(["sanjay" , "pradiba" , "react" , "developer" , "millionaire"]);
  
   function addname(){
    const a = document.getElementById("name").value
    document.getElementById("name").value = " ";
     
    setList(list=>[...list,a]);

   }
   function handledelete(index) {
    setList(list.filter( (_,i)=> i !== index));
   }
  

   





    return( <div>
    <button onClick={()=>{handleClick("sanjay")}}>Click Me🤣</button>
    <button onClick={(e)=>{handleEvent(e)}}>Click Me 😀</button>
    <img onClick={(e)=>(hide(e))} src={imageurl} alt="react" />
    <br />

    <p>{students.name}</p>
    <p>{students.age}</p>
    <p>{students.marks}</p>
    <p>{students.fathername}</p>

    <input type="text" onChange={(e)=>handleNameChange(e)}  value={students.name} />
    <input type="text" onChange={(e)=>handleAgeChange(e)}  value={students.age} />
    <input type="text" onChange={(e)=>handleMarksChange(e)}  value={students.marks} />
    <input type="text" onChange={(e)=>handleFatherNameChange(e)}  value={students.fathername} />
    
     <h1>List Of Peoples</h1>
    <ul>
        {list.map((a,index) => <li onClick={()=>handledelete(index)} key={index}> {a} </li>)}
    </ul>

    <input type="text"  id="name" />
    <button onClick={addname}> add </button>
    <br />
    

   

    </div> )
  
}
export default Services;