import React from 'react';
import { CartItemContainer, CartItemImgContainer, ItemDetailsContainer } from './ cart-item.styles';

const CartItem = ({ item : {imageUrl, price, name, quantity }}) => {
    return (
        <CartItemContainer>
            <CartItemImgContainer src={imageUrl} alt='item' />
            <ItemDetailsContainer>
                <span>{name}</span>
                <span>{quantity} X {price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;
