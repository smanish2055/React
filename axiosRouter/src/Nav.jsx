import React from 'react'
import { NavLink } from 'react-router-dom';
// import { Link} from 'react-router-dom'

export default function Nav() {
  return (
    // we can not put class link tag insted we can use in NavLink

    // for active link we can use inline css also i.e style = {(Active{is})=>{return {color:isActive ? 'green':'red'}}}
    <div >
      <ul className="nav">
    <li> <NavLink className='nav-bar' to="/" >Home</NavLink></li> 
    
      <li><NavLink className='nav-bar' to="/contact" >Contact Us</NavLink></li>

      <li><NavLink className='nav-bar' to="/about" >About</NavLink></li>
     
      <li><NavLink className='nav-bar' to="/users/Manish" state={{name:'Manish Shah',age:25}} >Manish</NavLink></li>
      
      <li><NavLink className='nav-bar' to="/users/Shah">Shah</NavLink></li>
    </ul>
    </div>
  )
}
