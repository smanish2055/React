import React,{useState} from 'react'

export default function Y4_EventHandeling() {
    const purple = "#8e44ad";

    const [bg , setBg]=useState(purple);
    const [oldName,setName]=useState( "click me");

    const  bgChange = ()=>{
        let newBg ='#34495e';
        setBg(newBg);
        setName("Ouch !! 🧕");
  
    }

    const bgBack=()=>{
        setBg("black");
        setName("Ayyyo!! 😠")
    }
    const original = ()=>{
        setBg(purple);
        setName("click me")
    }

  return (
    <>
    <div style ={{background:bg}}>
        
      <button onClick={bgChange} onMouseEnter={bgBack}onMouseLeave={original}>{oldName}</button>
    </div>
    </>
  )
}
