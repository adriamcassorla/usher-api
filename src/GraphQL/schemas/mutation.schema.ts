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
}

input ShowInput {
    date: String!
    active_sale: Boolean!
    available_seats: Int!
}

type EventResponse {
  error: String
  event: Event
}

  
  type Mutation {
    addFav(eventId: Int!): User!
    deleteFav(eventId: Int!): User!
    createTickets(show_id: String!, nSeats: Int! ): TicketResponse!
    validateTicket(showId: String!, ticketId: String!): TicketResponse!
    createUser(email: String!, password: String!, first_name: String!, last_name: String!): SignInResponse!
    createEvent(event: EventInput!, shows:[ShowInput]!):EventResponse!
    createPromoter(email: String!, password: String!, name: String!, telephone: Int!): PromoterSignInResponse!
  }
`
