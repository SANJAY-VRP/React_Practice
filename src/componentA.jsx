import React from "react";
import { createContext } from "react";

import Home from "./home";
export const userContext = createContext();

function ComponentA(){
    const user = "sanjay" ;

    <userContext.Provider value={user} >
             < Home/> 
    </userContext.Provider>


}
export default ComponentA;