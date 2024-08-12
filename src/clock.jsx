import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { userContext } from "./componentA";
import './assets/css/clock.css'
function DigitalClock() {
    const name1 = useContext(userContext);
    const [time, setTime] = useState({
        hour: "",
        min: "",
        sec: ""
    });
    useEffect(() => {
        const interval = setInterval(() => {
            let hour1 = new Date().getHours()%12;
            if(hour1<10 && hour1>=1){
                var b = hour1;
                b.toString()
                hour1 = "0"+b;
            }
            let min1 = new Date().getMinutes();
            if(min1<10 && min1>=1){
                var a = min1;
                a.toString()
                min1 = "0"+a;
            }
            let sec1 = new Date().getSeconds();
            if(sec1<10 && sec1>=1){
                var c = sec1;
                c.toString()
                sec1 = "0"+c;
            }  
            setTime({
                hour: hour1,
                min: min1,
                sec: sec1
            });
        }, 1000); 
    }, []); 
    return (
        <>
            <div className="digital-clock-container">
            <h1 className="clock-title">Digital Clock </h1>
            <div className="clock-time">
                <span>{time.hour}</span>:<span>{time.min}</span>:<span>{time.sec}</span>
            </div>
        </div>
        </>
    );
}

export default DigitalClock;
