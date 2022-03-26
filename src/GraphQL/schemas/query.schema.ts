import { gql } from 'apollo-server-express';

export default gql`

type SignInResponse {
    error: String
    user: User
    token: String
}

type TicketResponse {
  error: String
  show: Show
  ticket: String
}

type ShowResponse {
  error: String
  show: Show
}

type Query {
  getCityEvents(city: String! dayRange: Int): [Event]!
  getEvent(id: Int!): Event
  getUser(email: String password: String): SignInResponse!
  validateShow(id: String!): ShowResponse!
}
`
