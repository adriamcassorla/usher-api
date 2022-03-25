import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_TEST_KEY || "sk_test_51KgrhQLqoAr5l9cwJOdNZ9MbmlcCmVPSgi4nDQMK6B3HPjhKxYq5dcGMoqlmJZEVDQgojSQKZbF1VsulVnXP5WuK00RQS2jlWj", {apiVersion: '2020-08-27', typescript: true}); 

const createPayment = async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  // const customer = await stripe.customers.create();
  // const ephemeralKey = await stripe.ephemeralKeys.create(
  //   {customer: customer.id},
  //   {apiVersion: '2020-08-27'}
  // );
  console.log('trying to pay');
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    // customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });
  const clientSecret = paymentIntent.client_secret
  console.log('sending client secret')
  res.json({clientSecret})
  // res.json({
  //   paymentIntent: paymentIntent.client_secret,
  //   ephemeralKey: ephemeralKey.secret,
  //   customer: customer.id,
  //   publishableKey: 'pk_test_51KgrhQLqoAr5l9cwCqC9ZvVhuT6aU7XT5tGYNo1fUI1jcJQ5lN7YP6JP7FEPx1zeOdZ1dIp5AM8UM2efBgSZyDFm00SCEdEK5b'
  // });
};

export default createPayment;