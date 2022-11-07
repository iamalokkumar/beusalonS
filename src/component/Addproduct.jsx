import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
let [name,setName]=useState("")
let [price,setPrice]=useState("")
let navigate=useNavigate()

let productName=(e)=>{
   setName(e.target.value)
}
let productPrice=(e)=>{
    setPrice(e.target.value)
 }
let myFun=()=>{
    axios.post("https://beusalon.herokuapp.com/api/data",{
        products:name,
        price:Number(price),
        qty:Number(0)
    }).then((res)=>{
        alert("Data Added Successfully")
        navigate('/')
    })
    .catch((err)=>{
        console.log(err)
    })
}
  return (
    <div>
        <input type="text" placeholder='Enter Product Name' onChange={productName}/>
        <input type="text" placeholder='Enter Product Price' onChange={productPrice}/>
        <button onClick={myFun}>Submit</button>
    </div>
  )
}

export default Addproduct