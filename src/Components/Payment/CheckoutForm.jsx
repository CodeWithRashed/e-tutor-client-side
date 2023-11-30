import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
  const elements = useElements();
const axiosSecure = useAxiosSecure()
const [clientSecret, setClientSecret] = useState()
  //Handle Submit
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
            card: card,
            billing_details: {
                email: "tools.rashed@gmail.com",
                name: "Rashed"
            }
        }

    })
    console.log(paymentIntent)
  };

  useEffect(()=>{
    
    axiosSecure.post("/create-payment-intent", {price: 200})
    .then(res =>{
    console.log(res.data.clientSecret)
    setClientSecret(res.data.clientSecret)
    })
  },[axiosSecure])

 
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <CardElement
        options={{
            
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    </div>
  )
}

export default CheckoutForm
