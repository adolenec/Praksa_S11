import React, { useContext } from 'react';

import classes from './Meal.module.css';
import MealForm from './MealForm';
import { CartContext } from '../Context/CartContext';

const Meal = props => {
    const cartCtx = useContext(CartContext);
    const price = parseFloat(props.price);

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.title,
            amount: amount,
            price: props.price
        })
    }

    return (
        <div className={classes['meal-div']}>
            <div className={classes['meal-info']}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <h3 className={classes.price}>${price}</h3>
            </div>
            <MealForm onAddToCart={addToCartHandler}/>
        </div>
    )
}

export default Meal;