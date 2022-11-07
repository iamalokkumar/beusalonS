import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Datamap from './Datamap'

const Datapage = () => {
    let[data,setData]=useState([])
   
  
 let [cartData,setCartData]=useState([])
let navigate=useNavigate()
    let addPage=()=>{
      navigate('/add')
    }


    let getData=()=>{
      axios.get("https://beusalon.herokuapp.com/api/data")
      .then((res)=>{
        console.log(res.data)
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    useEffect(()=>{
     getData()
    },[])

   

   let myFuns=()=>{

   
   axios.get(`https://beusalon.herokuapp.com/api/cart`)
   .then((res)=>{
    console.log(res.data)
    setCartData(res.data)
   })
   .catch((err)=>{
    console.log(err)
   })
}
   useEffect(()=>{
myFuns()
   },[])

   let price=cartData.reduce((cur,ele)=>{
       return cur+ele.qty*ele.price
   },0)
   console.log(price)
  return (
    <div style={{display:"flex"}}>
       <div style={{marginRight:"50px",border:"3px solid black",textAlign:"center"}}>
        <h1>Products</h1>
        <button onClick={addPage}>Add</button>
          {data.map((elem)=>(
           <Datamap elem={elem} getData={getData} key={elem.id}/>
          ))}
       </div>
       <div>
       <div>
        {cartData.map((e)=>(
            <div key={e.id} style={{display:"flex",justifyContent:"space-around"}}>
                <h3 style={{marginRight:"15px"}}>{e.products}</h3>
                <h3>{e.price}*{e.qty}</h3>
            </div>
        ))}
        <h3>Total:{price}/-</h3>
       </div >
       </div>
    </div>
  )
}

export default Datapage