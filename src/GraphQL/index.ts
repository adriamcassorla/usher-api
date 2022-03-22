import { ApolloServer } from 'apollo-server';
import jwt from 'jsonwebtoken';

import prisma from './../prisma/client'
import typeDefs from './schemas';
import resolvers from './resolvers';

const SECRET_KEY = "yrulECx/t7cadA/W0/UJxoCnbIU=" as string;

export default new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  context: ({ req }) => {

    const token = req.headers.authorization;
    if (token) {
      const payload = <jwt.UserIDJwtPayload>jwt.verify(token?.substring(7), SECRET_KEY);
      if (payload) {
        const { id, role } = payload;
        return { user: { id, role }, prisma }
      }
    }
    return { prisma }
  }
});
