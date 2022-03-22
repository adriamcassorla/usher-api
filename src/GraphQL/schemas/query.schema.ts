import { gql } from 'apollo-server-express';

export default gql`

type SignInResponse {
  error: String
  user: User
  token: String
}

type Query {
  getCityEvents(city: String! dayRange: Int!): [Event]!
  getEvent(id: Int!): Event
  getProfile: User
  login(email: String password: String): SignInResponse!
}
`
