import Express from 'express';
import createPayment from './createPayment';

const router = Express.Router()

router.post('/create-payment-intent', createPayment)

router.all('*', (req, res) => {
  res.status(404);
  res.send('Incorrect route');
});

export default router