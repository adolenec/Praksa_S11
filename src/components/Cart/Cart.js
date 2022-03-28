import { useContext } from 'react';
import classes from './Cart.module.css';
import { CartContext } from '../Context/CartContext';
import CartItem from './CartItem';

const Cart = props => {

    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount.toFixed(2);

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    return (
        <div className={classes.cart}>
            <div className={classes['food-info']}>
                {cartCtx.items.map((item)=> (
                    <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)}/>
                ))}
            </div>
            <div className={classes['total-amount']}>
                <h1>Total Amount</h1>
                <h1>${totalAmount}</h1>
            </div>
            <div className={classes.buttons}>
                <button className={classes.close} onClick={props.onHideModal}>Close</button>
                <button className={classes.order}>Order</button>
            </div>
        </div>
    )
}

export default Cart;