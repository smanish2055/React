import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function user() {
    const params = useParams; 
   const {name} = params();
   const location = useLocation;
   const fn = location();
   console.log(fn);
  //  in console you will get 
//   {pathname: '/users/Manish', search: '', hash: '', state: {…}, key: '1h19a4xg'}
// hash
// : 
// ""
// key
// : 
// "1h19a4xg"
// pathname
// : 
// "/users/Manish"
// search
// : 
// ""
// state
// : 
// {name: 'Manish Shah', age: 25} it  is pass from Nav component as state object
// [[Prototype]]
// : 
// Object
  return (
    <div>
      <p>hello my name is {name}</p>
    </div>
  )
}
