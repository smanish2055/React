import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ContactRout() {
  return (
    <div>
      <h1>Hi i m contact page</h1>
      <Link to="company" >Company</Link>
      <Link to="channel" >Channel</Link>
      <Link to="others" >Other</Link>
{/*nested route */}
      <Outlet/> 
    </div>
  )
}
