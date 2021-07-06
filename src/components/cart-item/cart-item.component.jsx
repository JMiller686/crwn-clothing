import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item : {imageUrl, price, name, quantity }}) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <p className='name'>{name}</p>
                <p className='price'>{quantity} X {price}</p>
            </div>
        </div>
    )
}

export default CartItem;
