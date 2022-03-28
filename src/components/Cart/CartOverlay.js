import { Fragment } from "react";
import ReactDOM from 'react-dom';
import Cart from "./Cart";
import classes from './CartOverlay.module.css';

const Overlay = props => {
    return <div className={classes.overlay} onClick={props.onHideCart}></div>
}

const CartModal = props =>{
    return (
        <Cart onHideModal={props.onHideCart}>{props.children}</Cart>
    )
}

const CartOverlay = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Overlay onHideCart={props.onCloseCart}/>, document.getElementById('overlay'))}
            {ReactDOM.createPortal(<CartModal onHideCart={props.onCloseCart}/>, document.getElementById('cart-overlay'))};
        </Fragment>
    )
}

export default CartOverlay;