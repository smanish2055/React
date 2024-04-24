import React from 'react'

export default function slotM(props) {
if(props.x===props.y && props.y===props.z){
  return (
    <div>
       <div className="slot_inner">
        <h1>
            {props.x} {props.y} {props.z}
        </h1>
        <h1> This is Matching.</h1>
        <hr />
       </div>
    </div>
  )
}else{
    return (
        <div>
           <div className="slot_inner">
            <h1>
                {props.x} {props.y} {props.z}
            </h1>
            <h1> This is not Matching.</h1>
            <hr />
           </div>
        </div>
      )
}
}
