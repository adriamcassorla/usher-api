import { gql } from 'apollo-server-express';

export default gql` 
  
  type Mutation {
    addFav(eventId: Int!): User!
    deleteFav(eventId: Int!): User!
    createTickets(show_id: String!, nSeats: Int! ): TicketResponse!
    useTicket(id: String!): Ticket!
    createUser(email: String!, password: String!, first_name: String!, last_name: String!): SignInResponse!
    createPromoter(email: String!, password: String!, name: String!, telephone: Int!): PromoterSignInResponse!
  }
`
