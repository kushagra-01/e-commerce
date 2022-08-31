import axios from "axios";
import { useEffect, useState } from "react"

import { useNavigate } from "react-router";


export const Cart = () =>{
    const navigate=useNavigate()
  const[data,setdata]=useState([]);
  useEffect(()=>{
     getdata()
  },[])
  const getdata=()=>{
    axios.get('https://parait.herokuapp.com/cart').then((res)=>{
        setdata(res.data)
        console.log(res.data)
    })
  }
   let sum=0;
  data.map((e)=>{
      sum=sum+e.price
  })
  let GST=Math.round(sum*0.18);

  const handledelete=(id)=>{
     
      axios.delete(`https://parait.herokuapp.com/${id}`)
      axios.get('https://parait.herokuapp.com/cart').then((res)=>{
        setdata(res.data)
    })
   
 }
    
    return(
        <>
        <h1 className="heading">Shopping Cart</h1>
         <div className="cartdiv">
           
           <div className="cartset">
           <h1>{data.length===0?<img style={{width:"90%"}} src="https://www.creativehatti.com/wp-content/uploads/2022/05/Santa-Claus-is-sitting-on-a-shopping-cart-10-small.jpg"></img>:null}</h1>
           {data .map((e)=>{
          return(
            <div className="single" key={e.id}>
                <div className="cartimg">
                <img src={e.image}></img>
                </div>
                <div className="cartdetails">
                  <h2>{e.name}</h2>
                  <p>UK-{e.size}</p>
                  <p>₹{e.price}/-</p> 
                  <button onClick={()=>{handledelete(e._id)}}>Remove</button>
                </div>

            </div>
        )
         } )}
         </div>
         <div>
         <h2 className="total">Total Products:    {data.length}pcs</h2>
        <div className="fontcart"> <span style={{fontSize:"22px",fontWeight:"500"}}>Subtotal:</span><span className="subtotal">₹{sum}/-</span></div>
        <div className="fontcart"><span style={{fontSize:"22px",fontWeight:"500"}}>GST(18%):</span><span className="subtotal">₹{GST}/-</span></div>
        <div className="fontcart"><span style={{fontSize:"22px",fontWeight:"500"}}>Total:</span><span className="subtotal">₹{sum+GST}/-</span></div>
        <div className="fontcart"><button disabled={data.length==0} onClick={()=>{navigate(`/checkout`)}} style={{width:"80%",height:"70px",fontSize:"20px"}}>Checkout</button></div>
         </div> 
         </div>
        </>
    )
}