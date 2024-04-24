import { createContext } from 'react';
import './App.css';
import ComA from './ComA';
// import UseContext from './UseContext';
import UseEffectHooks from './UseEffectHooks';
import UseReducer from './UseReducer';
// import UseContext from './UseContext';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <div>
      <FirstName.Provider value={"Manish"}>
      <LastName.Provider value={"shah"}>
      <ComA/>
      {/* <UseContext/> */}
      </LastName.Provider>
      </FirstName.Provider>
    <UseEffectHooks/>

    <UseReducer/>
    </div>
  );
}

export default App;
export {FirstName,LastName};
