
import { useState } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// here i m using material ui 
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() {

  // let arr =[];
const [inputList,setInputList]= useState("");
const [items,setItems] = useState([]);

const ItemEvent = (event)=>{
  setInputList(event.target.value);
    
};

const listOfItems =  ()=>{
  setItems((oldItems)=>{
    return [...oldItems,inputList]
  });
  setInputList("");
};

// delete data
const deleteItems = (index)=>{
 console.log(index);
 setItems((oldItems)=>{
  return oldItems.filter((arrElem,id)=>{
    return id !== index;
  })
 })
}
  return (
    <>
    <div className='main_div' >
      <div className="center_div">
        <br />
        <h1>ToDO List</h1>
        <br />
        <input type="text" placeholder='Add a Items' value={inputList} onChange={ItemEvent} />
        <button onClick={listOfItems} > <AddIcon/> </button>

        <ol>
          {items.map((value,index) => {
            return <div className="todo_style">
              < DeleteForeverIcon className="i" onClick={()=>deleteItems(index)}/>

               <li> {value} </li>
            </div>
          } ) }

        </ol>
      </div>
     

     {/* bootstrap  */}
    {/* <button className="btn btn-success">click</button>
    <button className="btn btn-primary">click</button> */}
   
    </div>

    </>
  );
}

export default App;
