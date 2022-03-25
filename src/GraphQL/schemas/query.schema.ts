import { gql } from 'apollo-server-express';

export default gql`

type Query {
  getCityEvents(city: String! dayRange: Int): [Event]!
  getEvent(id: Int!): Event
  getUser(email: String password: String): SignInResponse!
}
`
