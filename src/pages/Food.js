import axios from 'axios'
import "./Food.css"
import React, { useEffect, useState } from 'react'
import Fooditems from './Fooditems';


const Food = () => {
    const [food,setFood] = useState("")
    console.log(food);

    useEffect(()=> {
        const getFood = async()=> {
            const res = await axios.get("/post/")
            console.log(res);
            setFood(res.data)
        }
        getFood()
    },[])

   


  return (
    <>
    <h2 style={{textAlign:"center"}}>Dine-in Resturant</h2>
    <div className='foodItems'>
    {food && food.map((f,index)=> (
        <Fooditems key={index} food={f} />
    ))}
    </div>
    </>
  )
}

export default Food