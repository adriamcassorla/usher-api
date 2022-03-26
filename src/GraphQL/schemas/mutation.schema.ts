import { gql } from 'apollo-server-express';

export default gql` 
  
  type Mutation {
    addFav(eventId: Int!): User!
    deleteFav(eventId: Int!): User!
    createTickets(show_id: String!, nSeats: Int! ): TicketResponse!
    validateTicket(showId: String!, ticketId: String!): TicketResponse!
    createUser(email: String!, password: String!, first_name: String!, last_name: String!): SignInResponse!
  }
`
