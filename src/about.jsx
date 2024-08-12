import React from "react";
import Blog from "./blog";
function About(){
    const array = [
        {id:1,name:"sanjay",age:22},
        {id:2,name:"pradiba",age:21},
        {id:3,name:"react",age:29},
        {id:4,name:"develeoper",age:5},
        {id:5,name:"teacher",age:2}
    ];

    return( <div>
      
    
         <Blog items={array}/>
    </div> )
}  
export default About;