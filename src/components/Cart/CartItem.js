import classes from './CartItem.module.css';

const CartItem = props => {
    return(
    <div className={classes['cart-item']}>
        <div className={classes.info}>
            <h3>{props.name}</h3>
            <div className={classes['price-info']}>
                <span className={classes.price}>${props.price}</span>
                <span className={classes.amount}>x {props.amount}</span>
            </div>
        </div>
        <div className={classes.buttons}>
            <button onClick={props.onRemove}>-</button>
            <button onClick={props.onAdd}>+</button>
        </div>
    </div>
    )
}

export default CartItem;