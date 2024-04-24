import React from 'react'
import {useSearchParams} from 'react-router-dom';
export default function SeacrchParameterHook() {
    // the optional key-value pairs that appear after the question mark in the URL
    // http://localhost:3000/search?age=23&city=jhumka

    const [searchParams,setSearchParams] = useSearchParams();
    const age = searchParams.get('age');
    const city = searchParams.get('city');
  return (
    <div>
      <h1>Filter Page</h1>
      <h3>Age is : {age}</h3>
      <h3>City is : {city}</h3>
    </div>
  )
}
