import React,{useState} from 'react'

export default function Y3_DigitalCLock() {

    let newTime = new Date().toLocaleTimeString();
    const [ctime , setCtime]= useState(newTime);
    const updateTime=()=>{
         newTime = new Date().toLocaleTimeString();
         setCtime(newTime)
    }

    setInterval(updateTime,1000);
  return (
    <div>
      <h1 >{ctime}</h1>
    </div>
  )
}
