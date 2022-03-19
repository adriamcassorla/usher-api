import { gql } from 'apollo-server-express';

export default gql`

type Query {
  getCityEvents(city: String!): [Event]!
  getEvent(id: Int!): Event
}
`
