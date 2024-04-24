import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AboutRout() {

  const navigate = useNavigate();
  const navToPage = (url)=>{
    navigate(url);
  }

  return (
    <div>
      <h1>Hi i m Home page </h1>

      <button onClick={()=>{
        navToPage('/contact')
      }}>Go to contact page</button>
      <br />
      <button onClick={()=>{
        navToPage("/users/Manish")
      }}>Go to About page</button>
    </div>
  )
}
