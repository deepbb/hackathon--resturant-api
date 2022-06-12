import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Cart.css"

const Cart = () => {
  const navigate = useNavigate()

    const [product,setProduct] = useState("")
    console.log(product)

    useEffect(()=> {
        const loadCart = () => {
            if (typeof window !== undefined) {
              if (localStorage.getItem("food")) {
                return JSON.parse(localStorage.getItem("food"));
              }
            }
          };
         setProduct(loadCart())
    },[])

    const removeItem = ()=> {
        localStorage.removeItem("food")
        navigate("/food")

    }
  return (
    <>
    <div>
    <h2>Your Cart Items</h2>
    {product ? <p>Cart Items</p> : <p>Cart is empty</p>}
    {product &&
    <>
    <p>{product && product.title}</p>
    <img src={product&& product.photo} alt="food photos" width="200" height="200" />
    <button onClick={removeItem}>Remove from cart</button> 
    <button>Check out</button>
    </>
    
    }
    
    </div>
    </>
  )
}

export default Cart