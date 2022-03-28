import React, { Fragment, useState} from 'react';
import classes from './Header.module.css';
import headerBg from '../../Assets/meals.jpg';
import CartButton from './CartButton';
import CartOverlay from '../Cart/CartOverlay';


const Header = props => {


    const [showCart, setShowCart] = useState(false);

    const displayCart = () =>{
      setShowCart(true);
    }
  
    const hideCart = () =>{
      setShowCart(false);
    }

    console.log(showCart);

    return (
        <Fragment>
            {showCart && <CartOverlay onCloseCart={hideCart}/>}
            <div className={classes.header}>
                <h1>ReactMeals</h1>
                <CartButton onShowCart={displayCart}/>
            </div>
            <div className={classes['header-img']}>
                <img src={headerBg} alt="Meals"/>
            </div>
        </Fragment>
    )
}

export default Header;