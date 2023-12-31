import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../Components/Payment/CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const PaymentPage = () => {
  return (
    <div className='mt-20 h-[50vh]'>
       <Elements stripe={stripePromise} >
      <CheckoutForm />
    </Elements>
    </div>
  )
}

export default PaymentPage
