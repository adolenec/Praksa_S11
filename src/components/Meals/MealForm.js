import { useState } from 'react';
import classes from './MealForm.module.css'

const MealForm = props => {

    const [amount, setAmount] = useState(0);

    const amountHandler = event => {
        setAmount(event.target.value);
        console.log(event.target.value);
    }

    const submitFormHandler = event => {
        event.preventDefault();

        if(+amount === 0) {
            return;
        }else{
            props.onAddToCart(+amount);   
        }

    }

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div className={classes.amount}>
                <label htmlFor='amount'>Amount</label>
                <input type='number' id='amount' min='1' max='5' step='1' onChange={amountHandler}/>
            </div>
            <div className={classes['btn-div']}>
                <button>+ Add</button>
            </div>
        </form>
    ) 
}

export default MealForm;