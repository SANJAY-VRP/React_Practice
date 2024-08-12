import React from "react";
import { useState } from "react";

function Counter(){

const [data,setdata] = useState(0);
const minus = ()=>{
    setdata( d => d - 1); // updater function 
}
const plus = ()=>{
    setdata(data+1);
}
const reset = ()=>{
    setdata(0);
}
const buttons = <>    <button className="btn btn-danger m-1 p-2" onClick={minus} >Decrement</button>
<button className="btn btn-success m-1 p-2 " onClick={plus}>Increment</button>
<button className="btn btn-primary m-1 p-2" onClick={reset}>Reset</button></>
return(<>
  <center><h1>{data}</h1></center>
   <center>{buttons}</center>
    




</>);
}
export default Counter;