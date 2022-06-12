import React from 'react'
import "./Fooditems.css"
import { useNavigate } from 'react-router-dom';


const Fooditems = ({food}) => {
  const navigate = useNavigate()
    console.log(food);
      const handleCart = ()=> {
            
        localStorage.setItem("food",JSON.stringify(food))
        // const items =JSON.parse(localStorage.getItem("food",))
        // console.log(items);
        navigate("/cart")

    }
  return (
    <div className='singleItems'>
        
        <h3 className='title'>{food.title}</h3> 
        <img src={food.photo} alt="food photos" width="200" height="200" />
        <button className='btn' onClick={handleCart}>Add to cart</button>
        

    </div>
  )
}

export default Fooditems