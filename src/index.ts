require('dotenv').config();
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './Stripe';
import server from './GraphQL';
const { httpServer, app, apolloServer } = server;

(async function () {

  app.use(cors());
  app.use(bodyParser.json());
  app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
    const payload = req.body;
    console.log('Got payload: ' + payload);
    res.status(200)
  })
  app.use('/stripe', router);

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: true, bodyParserConfig: true });
  await new Promise<void>(resolve => httpServer.listen({ port: 4004, hostname: '192.168.1.138' }, resolve));
  console.log(`🚀 Server ready at http://localhost:4004${apolloServer.graphqlPath}`);
  app.all('*', (req, res) => {
    res.status(404);
    res.send('Incorrect route')
  })
})()

