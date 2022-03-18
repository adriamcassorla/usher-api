import { gql } from 'apollo-server-express';

export default gql`

type Query {
  getShows(city: String!): [Show]!
}
`
