import React from 'react';

import { CheckoutPageContainer, CheckoutHeader, HeaderBlock, CheckoutTotal, TestWarning } from './checkout.styles';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <HeaderBlock>Product</HeaderBlock>
            <HeaderBlock>Description</HeaderBlock>
            <HeaderBlock>Quantity</HeaderBlock>
            <HeaderBlock>Price</HeaderBlock>
            <HeaderBlock>Remove</HeaderBlock>
        </CheckoutHeader>

        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }

        <CheckoutTotal>
            TOTAL: ${total}
        </CheckoutTotal>
        
        <TestWarning>
            *Please use the following test cc for payment<br/>
            4242 4242 4242 4242 - Exp: Any future date - CCV: 123
        </TestWarning>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage);
