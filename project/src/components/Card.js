import React from 'react'

export default function Card(ele) {
  return (
    <div className="main">
         <div className="contain"> 
      <h3>Client name is {ele.Name}</h3>
      <h4>Rolln.o: {ele.Rollno}</h4>
      <h5>Course {ele.Course}</h5>
      </div> 
    </div>
  )
}
