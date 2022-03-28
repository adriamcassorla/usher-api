import Stripe from "stripe";
const STRIPE_KEY = process.env.STRIPE_KEY as string
const stripe = new Stripe(STRIPE_KEY, { apiVersion: '2020-08-27', typescript: true });

const createPayment = async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    const clientSecret = paymentIntent.client_secret
    res.json({ clientSecret })
  } catch (e) {
    console.error(e);
    res.status(501)
    res.json({ error: 'Unable to generate payment, please try again' })
  }
};

export default createPayment;