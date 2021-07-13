import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JCnkiJDIHnonC7qGEPF139gwTpiLkZE1DNWH0rownKxhH9yQKZkz9j4gLb8ygiETS30NmTKlFRNt2RLxXnSqeIf00UWREsaGt';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout  
            label="Pay Now"
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            bitcoin={true}
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;