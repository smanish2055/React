
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import NavBar from './NavBar';

function App() {
  return (
    <div >
      <NavBar/>
      <div className=" container my-5 contact">
      <h3 className="font-weight-bold con  ">CONTACT US</h3>
      <div className="row">
      <h1 className="letsbuild" >Let's build together</h1>
        <div className="col-5">
     
      <p>Whether you're a startup trying to launch a business or an enterprise looking to scale up, there's definitely something we can do for you.</p>  
      </div>
      </div>
</div>
      <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
