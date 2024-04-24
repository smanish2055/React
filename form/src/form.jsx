import React, { useState } from 'react'

export default function Y5_Form() {
    const [name,setValue]=useState("");
    const [lastname,setlastValue]=useState("");
    let final ="";
    let last="";
    let inputEvent = (event)=>{
        final=event.target.value
       
    }
    let LastEvent=(event)=>{
      last=event.target.value
    }

    const add=(event) =>{
      event.preventDefault();
        setValue(final)
        setlastValue(last)
    }

    


  return (
    <div>
      <form onSubmit={add}>
      <h1>Hello {name} {lastname}</h1>
      <input type="text" placeholder='Enter Your Name' onChange={inputEvent} />
      <input type="text" placeholder='Enter Last Name' onChange={LastEvent} />
      <button type="submit">Click 👍</button>
      </form>


      {/* spread operato */}

     

    </div>
  )
}
