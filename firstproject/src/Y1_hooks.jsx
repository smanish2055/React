import React , {useState} from 'react'
// var a=4;

export default function Y1_hooks() {
 const [count,setCount] = useState(0);

const incNum =()=>{
    setCount(count + 1);
}

const DecNum =()=>{
  if(count > 0){
  return setCount(count - 1 );
  }else{
    alert("exceed")
   return setCount(0)
  }
}

  return (
    <div class="button">
     
      <button  onClick={incNum}>increase me</button>
      <h1>{count}</h1>
      <button  onClick={DecNum}>decrease me</button>
    </div>
  )
}
