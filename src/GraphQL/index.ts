import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import jwt from 'jsonwebtoken';
import prisma from '../../prisma/client';
import typeDefs from './schemas';
import resolvers from './resolvers';
const SECRET_KEY = process.env.SECRET_KEY as string;

const app = express();
const httpServer = http.createServer(app);  
const apolloServer = new ApolloServer({

  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
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

export default { httpServer, app, apolloServer }