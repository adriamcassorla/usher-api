import Stripe from "stripe";
const STRIPE_TEST_KEY = process.env.STRIPE_TEST_KEY as string
const stripe = new Stripe(STRIPE_TEST_KEY, {apiVersion: '2020-08-27', typescript: true}); 

const createPayment = async (req, res) => {
  const { amount, currency } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: {
      enabled: true,
    },
  });
  const clientSecret = paymentIntent.client_secret
  res.json({clientSecret})
};

export default createPayment;