
import './App.css';
// YY MM DD H M S
let currDate =  new Date();
currDate = currDate.getHours();
let greeting ='';
if(currDate >=1 && currDate < 12){
  greeting = 'Good Morning';
}else if(currDate >= 12 && currDate <=19){
  greeting = "Good Afternoon";
}else{
  greeting="Good Night";
}

function App() {
  return (
    <div className='app'>
    <div className='greet'>
    <h1> Hello Sir , {greeting}</h1>
    </div>
    </div>
  );
}

const youtuber = " manish shah";
function man(){
  return 4+5;
}

export default App;
//this is not default export 
export {youtuber,man};
