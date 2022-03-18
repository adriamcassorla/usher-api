import { ApolloServer } from 'apollo-server';

import typeDefs from './schemas';
import resolvers from './resolvers';
import prisma from './../prisma/client'
const context = {prisma};

export default new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  context
});
