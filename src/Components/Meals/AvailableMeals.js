import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      image:" https://images.healthshots.com/healthshots/en/uploads/2023/02/27153505/Sushi-1600x900.jpg"
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      image:" https://cdn.britannica.com/37/236537-050-B1FD777B/Plate-of-German-Weiner-Schnitzel-with-lemon-and-roast-potatoes.jpg"
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      image:" https://recipes.net/wp-content/uploads/2021/10/the-best-grilled-bbq-burger-recipe.jpg"
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      image:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlCUOWCWZ-M17dYfL0X2x8_E1Hl4buzdZPh5KlXYxcw&s"
    }
  ];

const AvailableMeal = () => {

  return (
    <div>
       <ul className='mealul'>
        {
            DUMMY_MEALS.map((meal)=>(
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={meal.image} />
                <Card.Body>
                  <Card.Title>{meal.name}</Card.Title>
                 <Card.Title>{meal.price}</Card.Title>
                 <Card.Text>{meal.description}</Card.Text>
                
                 <label>Amount</label>
                 <input type='number'  min='1' max='5' defaultValue='1'/>
                          <br></br><br></br>
                 <Button variant="outline-danger">Add To Cart</Button>{' '}
               </Card.Body>
            </Card>
            ))
        }
       </ul>
    </div>
  )
}

export default AvailableMeal;
