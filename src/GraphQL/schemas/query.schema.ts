import { gql } from 'apollo-server-express';

export default gql`

type SignInResponse {
    error: String
    user: User
    token: String
}

type ShowResponse {
  error: String
  show: Show
}

type PromoterResponse {
  promoter: Promoter
  error: String
}

type VenueResponse {
  venue: Venue
  error: String
}

type Query {
  getCityEvents(city: String! dayRange: Int): [Event]!
  getEvent(id: Int!): Event
  getUser(email: String password: String): SignInResponse!
  validateShow(id: String!): ShowResponse!
  getTicketUsage(id: String!): TicketResponse!
  getVenueInfo(id: String): VenueResponse!
  getPromoter(email: String password: String): PromoterSignInResponse!
}
`
