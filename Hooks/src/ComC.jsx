import React from 'react'
import {FirstName,LastName} from "./App";
export default function ComC() {
  return (
    <div>
        {/* consumer expect only function */}
        <FirstName.Consumer>{(fname)=>{
            return(
                <LastName.Consumer>
                    {(lname)=>{
                        return(
                   <h1>My name is {fname} {lname}</h1>
  ); }}
                </LastName.Consumer>
            )
            
           
        }}</FirstName.Consumer>
      {/* <h1> i m manish shah</h1> */}
    </div>
  )
}

