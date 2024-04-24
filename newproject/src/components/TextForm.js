import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
    setText("You have clicked on handleUpclick")
    let newText = text.toUpperCase();
    setText(newText);
  }

const handleOnChange = (event)=>{
  console.log("On Change");
  setText(event.target.value);
}

const [text,setText] = useState('Enter text here');

  return (
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3" >
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange}rows="9"></textarea>
</div>
<button className="btn btn-primary " onClick={handleUpClick}>Convert To UpperCase</button>
    </div>
  )
}
