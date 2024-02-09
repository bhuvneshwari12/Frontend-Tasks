import React from 'react'
import  classes from './MealsSummary.module.css'

const MealSummary = () => {
  return (
    <section className={classes.summary}>
        <h2>Delicious Food,Delivered to you</h2>
        <p>
            Choose your favourite meal from our broad selecetion of available meals and enjoy a delicious lunch or dinner at home
        </p>
        <p>
            All our meals are cooked with high quality ingrediants,just in time and of course by expereinced chefs!
        </p>
    </section>
  )
}

export default MealSummary
