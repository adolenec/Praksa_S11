import React, { createContext, useReducer } from 'react';

const initialCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (prevState, action) => {
    if(action.type === 'ADD'){
        const newTotalAmount = prevState.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = prevState.items.findIndex((item)=> item.id === action.item.id);
        const existingCartItem = prevState.items[existingCartItemIndex];
        let newItemsArray;
        if(existingCartItem){
            let updatedItem;
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            newItemsArray = [...prevState.items];
            newItemsArray[existingCartItemIndex] = updatedItem;
        } else {
            newItemsArray = prevState.items.concat(action.item);
        }


        return {
            items: newItemsArray,
            totalAmount: newTotalAmount
        }
    }

    if(action.type === 'REMOVE'){

        const existingCartItemIndex = prevState.items.findIndex((item)=> item.id === action.id);
        const existingItem = prevState.items[existingCartItemIndex];
        const newTotalAmount = prevState.totalAmount - existingItem.price;

        let newItemsArray;

        if(existingItem.amount === 1){
            newItemsArray = prevState.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1}
            newItemsArray = [...prevState.items];
            newItemsArray[existingCartItemIndex] = updatedItem;
        }

        return {
            items: newItemsArray,
            totalAmount: newTotalAmount
        }
    }
    return initialCartState;
}

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState)

    const addItemHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}