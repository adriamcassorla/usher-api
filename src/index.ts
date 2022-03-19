require('dotenv').config();

import server from './GraphQL';

try {
  server.listen(4004).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console
  });
} catch (e) {
  console.error('Wrong server connection', e);
}
