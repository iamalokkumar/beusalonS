import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { json } from 'react-router-dom'

const Datamap = ({elem,getData}) => {
    let [qty,setQty]=useState(0)
    
let arr=JSON.parse(localStorage.getItem("cart"))||[]

    let addQty=(id)=>{
        setQty((qty)=qty+1)
        axios.patch(`https://beusalon.herokuapp.com/api/data/${id}`,{
            qty:qty
        })
        .then((res)=>{
            getData()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    let removeData=(id)=>{
        axios.delete(`https://beusalon.herokuapp.com/api/data/${id}`)
        .then((res)=>{
          getData()
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    let minusQty=(id)=>{
        setQty((qty)=>qty-1)
        axios.patch(`https://beusalon.herokuapp.com/api/data/${id}`,{
            qty:qty
        })
        .then((res)=>{
            getData()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    let cartData=(elem)=>{
       
       
       axios.post(`https://beusalon.herokuapp.com/api/cart`,{
        products:elem.products,
    price:elem.price,
    qty: elem.qty
       })
    }
  return (
    <div>
         <div key={elem.id} style={{display:"flex",justifyContent:"space-between",border:"2px solid black",backgroundColor:"pink",marginBottom:"15px"}} >
                  <h4>{elem.products}</h4>
                  <h4>{elem.price}/-</h4>
                  <button onClick={()=>{removeData(elem.id)}}>Remove</button>
                  <button onClick={()=>{addQty(elem.id)}}>+</button>
                  <h4>{elem.qty}</h4>
                  <button disabled={qty<0} onClick={()=>{minusQty(elem.id)}}>-</button>
                  <button onClick={()=>{cartData(elem)}}>Add To Cart</button>
            </div>
    </div>
  )
}

export default Datamap