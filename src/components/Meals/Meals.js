import React from 'react';

import Meal from './Meal';
import classes from './Meals.module.css';

const INITIAL_MEALS = [
    {
        id: '1',
        title: 'Sushi',
        description: 'Finest fish and veggies',
        price: '22.99'
    },
    {
        id: '2',
        title: 'Schnitzel',
        description: 'A german specialty',
        price: '16.50'
    },
    {
        id: '3',
        title: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: '12.99'
    },
    {
        id: '4',
        title: 'Green Bowl',
        description: 'Healthy...and green...',
        price: '18.99'
    }
]

const Meals = props => {

    return (
        <div className={classes['meals-div']}>
            {INITIAL_MEALS.map(meal=>(
                <Meal key={meal.id} id={meal.id} title={meal.title} description={meal.description} price={meal.price}/>
            ))}
        </div>  
    )
}

export default Meals;