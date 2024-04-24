
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';

function App() {
  return (
    // this code inside function is JSX
    <>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}

<Navbar title="TextUtils" />
<div className="container">
<TextForm heading="Enter the text to analyze below"/>
</div>

    </>
  );
}

export default App;
