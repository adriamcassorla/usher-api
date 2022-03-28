import { gql } from 'apollo-server-express';

export default gql` 

  type TicketResponse {
  error: String
  show: Show
  ticket: String
  used: Boolean
  }

  input EventInput {
  name: String!
  price: Float!
  type: EventTypes!
  genres: [String!]!
  image: String!
  poster: String!
  language: String!
  duration: Int!
  description: String!
  external_url: String!
  venue_id: String!
  shows: [ShowInput]!
}

input ShowInput {
    date: Int!
    active_sale: Boolean!
    available_seats: Int!
}

  
  type Mutation {
    addFav(eventId: Int!): User!
    deleteFav(eventId: Int!): User!
    createTickets(show_id: String!, nSeats: Int! ): TicketResponse!
    validateTicket(showId: String!, ticketId: String!): TicketResponse!
    createUser(email: String!, password: String!, first_name: String!, last_name: String!): SignInResponse!
    createEvent(input: EventInput!):Event!
  }
`
