import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_TEST_KEY as string, { apiVersion: '2020-08-27', typescript: true });

const createPayment = async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    automatic_payment_methods: {
      enabled: true,
    },
  });
  const clientSecret = paymentIntent.client_secret
  res.json({ clientSecret })
};

export default createPayment;