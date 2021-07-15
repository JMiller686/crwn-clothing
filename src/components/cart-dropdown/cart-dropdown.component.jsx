import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';

import { CartDropdownContainer, CartItemsContainer, CartDropdownButton, EmptyMessageContainer } from './cart-dropdown.styes';

import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

const CartDropdown = ({cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer> 
           {
               cartItems.length > 0 ? 
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) : (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )
           }
        </CartItemsContainer>
        <CartDropdownButton 
            inverted 
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
                GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
