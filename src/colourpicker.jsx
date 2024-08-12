import React from "react";
import { useState } from "react";
function ColourPicker(){
    const [color , setColor] = useState("#FFFFFF");
    const handleColor = (e)=>{
        setColor(e.target.value)
        console.log(e);
    }
    return(<>
    <h1>Color Picker</h1>
   <h1 style={{backgroundColor : color }} >selected color {color}</h1>
   <input type="color" value={color} onChange={(e)=>{handleColor(e)}} />
    </>);
}
export default ColourPicker;