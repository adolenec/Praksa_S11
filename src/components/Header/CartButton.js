import React, { useContext } from 'react';
import CartIcon from './CartIcon';
import classes from './CartButton.module.css';
import { CartContext } from '../Context/CartContext';

const CartButton = props => {

    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((n, item)=> {
        return n + item.amount;
    }, 0)

    return (
        <button onClick={props.onShowCart} className={classes['cart-btn']}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.amount}>{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton;