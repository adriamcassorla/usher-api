import { ApolloServer } from 'apollo-server';

import typeDefs from './schemas';
import resolvers from './resolvers';

export default new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
});
