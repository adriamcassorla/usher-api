import { gql } from 'apollo-server-express';

export default gql` 
  
  type Mutation {
    addFav(eventId: Int!): [Event]!
    deleteFav(eventId: Int!): [Event]!
    createTicket(userId: String!, showId: String!): Ticket!
    useTicket(id: String!): Ticket!
    createUser(email: String!, password: String!, first_name: String!, last_name: String!): SignInResponse!
  }
`
