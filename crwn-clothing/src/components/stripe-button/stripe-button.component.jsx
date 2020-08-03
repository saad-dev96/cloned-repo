import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51HC2FOGBncij05hu7zV7Cw9j0JvA8qDkxqpavCwhe0GOTMwzXMcwPvgzekVnOD7weS37X6tlyHz6nNtTnvQnHoUD00BDv0jogd'
    const onToken = token => {
        console.log(token);
        alert ('Payment Successful')
    }
    return (
        <StripeCheckout 
        label= 'Pay now'
        name = 'crwn-clothing'
        billingAddress
        shippingAddress
        image = 'https://sendeyo.com/up/d/f3eb2117da'
        description = {`Your total is $ ${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;