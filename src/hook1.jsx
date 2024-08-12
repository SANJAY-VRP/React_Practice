import React, { useState } from "react";
import { useEffect } from "react";
import Details from "./details";
import Cars from "./carsarray";

function Hook(){
  
  const [Detail, setDetails ]  = useState(
    {email : "",
    pass : ""}
  ) 
useEffect (()=>{
 console.log("details updated" , Detail);
},[Details]);

const handleInputChange = (event)=>{
    var {id , value} = event.target;
   
    
  console.log(id)
  console.log(value)
    setDetails((prevDetail) => ({
        ...prevDetail,
      
        [id]:value 
    }));
};



    return(
        <div className="form ">
            {/* <h1>This is Form</h1>
            <label htmlFor="">Email</label>
           <input id="email" type="text" value={Detail.email} onChange={handleInputChange} />
            <label htmlFor="">Password</label>
           <input id="pass" type="password" value={Detail.pass} onChange={handleInputChange} />
       
           <h1>{Detail.email}</h1>
           <h2>{Detail.pass}</h2> */}

           <Cars/>


        </div>
    )
}
export default Hook;