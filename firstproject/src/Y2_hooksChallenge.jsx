import React , {useState} from 'react'


export default function Y2_hooksChallenge() {
    let newTime = new Date().toLocaleTimeString();
    const [ctime , setCtime]= useState(newTime);
    const updateTime=()=>{
         newTime = new Date().toLocaleTimeString();
         setCtime(newTime)
    }
    
  return (
    <div>
      
  <h2> {ctime}</h2>
  <button onClick={updateTime}>clic me</button>
      
    </div>
  )
}
