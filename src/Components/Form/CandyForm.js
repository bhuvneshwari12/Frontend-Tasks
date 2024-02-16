import React, { useEffect, useState } from 'react'
import  './CandyForm.css'

const CandyForm = () => {
    const [candyName,setCandyName]=useState('')
    const [description,setDescription]=useState('')
    const [price,setprice]=useState('')
    const [candy,setCandy]=useState([])
  
  
    useEffect(() => {
      const storedInformation = localStorage.getItem('CANDYLIST')
      if (storedInformation) {
        setCandy(JSON.parse(storedInformation));
      }
    }, [ ]);
  
    const submitHandler=(event)=>{
      event.preventDefault()
      const obj={id:Date.now(),candyName,description,price:parseFloat(price)}
      const updatedCandies=[...candy,obj]
      setCandy(updatedCandies)
      localStorage.setItem('CANDYLIST',JSON.stringify(updatedCandies))
      }
  
      const increasePriceHandler=(id,amount)=>{
        const updatedCandies=candy.map((candy)=>{
            if (candy.id==id)
            {
                return {...candy,price:candy.price+amount}
            }
            return candy;
      })
      setCandy(updatedCandies)
      localStorage.setItem('CANDYLIST',JSON.stringify(updatedCandies))
      }


  return (
    <div className='border-box'>
      <form onSubmit={submitHandler}>
        <label>CandyName</label>
        <input type='text' value={candyName} onChange={(e)=>{setCandyName(e.target.value)}}/>

        <label>Description</label>
        <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>

        <label>Price</label>
        <input type='number' value={price} onChange={(e)=>{setprice(e.target.value)}}/>

        <div>
          <button>submit</button>
        </div>
      </form>
      <h2>Candies</h2>
      <ul>
        {
        candy.map((item)=>(
          <li key={item.id}>
            {item.candyName}-  {item.description}- ${item.price}
            <button onClick={()=>increasePriceHandler(item.id,1)}>Buy one</button>
            <button onClick={()=>increasePriceHandler(item.id,2)}>Buy two</button>
            <button onClick={()=>increasePriceHandler(item.id,3)}>Buy three</button>
          </li>
        )) 
        }
      </ul>
    </div>
  )
}

export default CandyForm
