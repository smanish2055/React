import React, { useState,useEffect } from 'react'

export default function UseEffectHooks() {

    const [num ,setNum] = useState(0);
    const [nums, setNums] = useState(0);


    // this hooks automatically call when page render 
    useEffect(()=>{
        alert(" i m clicked");
    },[num]);  
  return (
    <div>
      <button onClick={()=>{
        setNum(num + 1);
        }}>click me {num} </button>

        <br />

        <button onClick={()=>{
        setNums(nums + 1);
        }}>click me {nums} </button>
    </div>
  )
}
