
import './App.css';
import data from './Data.js'
import Card from './components/Card'
import R2IfElse from './components/R2IfElse'


const movie ="Netflix"

const fun=()=>{
    
        if(movie === "Netflix" ){
          return "i m if ";
        }
        else{
           return "i m else ";
        }
    
}

function App() {
  return (
  
    data.map((ele) =>{
      return (
        <>
        <Card Name = {ele.Name}
        Rollno ={ele.Rollno}
        Course ={ele.course}
        />
          <R2IfElse/>
         {fun()}
        </>
      );
    })
  
  );
}

export default App;
