import { gql } from 'apollo-server-express';

export default gql`

type Query {
  getCityEvents(city: String! dayRange: Int!): [Event]!
  getEvent(id: Int!): Event
  getProfile(id: String!): User
}
`
