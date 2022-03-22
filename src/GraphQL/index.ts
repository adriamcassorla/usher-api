import { ApolloServer } from 'apollo-server';
import jwt from 'jsonwebtoken';

import typeDefs from './schemas';
import resolvers from './resolvers';
import prisma from './../prisma/client'

const SECRET_KEY = process.env.SECRET_KEY as string;

export default new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  // context: {prisma}
  context: ({ req }) => {

    try {
      const token = req.headers.authorization;
      if (token) {
        const payload = <jwt.UserIDJwtPayload>jwt.verify(token?.substring(7), SECRET_KEY);
        const { id, role } = payload;
        return { id, role, prisma }

      }
    } catch (e) {
      // console.error(e);
      return { prisma }
    }

  }

});
