import { gql } from 'apollo-server-express';

export default gql` 
input InputPoint {
  latitude: Float!
  longitude: Float!
}

type Mutation {
  addVisitedDestination(userID: String!, locationID: String!): String!
}
`
