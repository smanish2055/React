import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";

export default function ComA() {
    const [d,setData]= useState();
    const [price,setPrice]= useState();

    useEffect(()=>{
        async function getData(){
           const res = await axios.get("https://fakestoreapi.com/products/1");
           setData(res.data.image);
           setPrice(res.data.price)
           console.log(res);
        }

        getData();
    });
  return (
    <div>
      <div className="card">
        <img src={d} alt=""width="200px"   />
       
        <p>{price}</p>
      </div>
    </div>
  )
}
