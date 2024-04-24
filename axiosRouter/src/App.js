
import './App.css';
// import ComA from './ComA';
import {Route, Routes,Navigate} from 'react-router-dom';
import Home from './Home';
import Contact from './ContactRout';
// import Error  from './Error';
import Nav from './Nav';
import User from './user';
import SeacrchParameterHook from './SeacrchParameterHook';
import Company from './Contact/Company';
import Channel from './Contact/Channel';
import Others from './Contact/Others';


// Hooks in React Router
// note: in any kind of hooks in react there would be "use" word before 
// useParams(use to get Dynamic ROuting value),useSearchParams(use for get query params),useLocatin,useNavigate
function App() {
  return (
    <div >
      {/* <ComA/> */}
      <Nav/>
    
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path = "/contact/" element={<Contact/>}>  
        <Route path="company" element={<Company/>}/ >
        <Route path="channel" element={<Channel/>}/ >
        <Route path="others" element={<Others/>}/ >
        </Route>

        <Route path = "/users/:name" element={<User/>}/>
        <Route path = "/search" element={<SeacrchParameterHook/>}/>
        <Route path="/*"   element={<Navigate to="/"/>} />

      </Routes>

      {/* <SeacrchParameterHook/> */}
    </div>
  );
}

export default App;
