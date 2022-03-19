import { gql } from 'apollo-server-express';

export default gql` 
input InputPoint {
  latitude: Float!
  longitude: Float!
}

type Mutation {
  addFav(userId: String!, eventId: String!): [Event]!
  deleteFav(userId: String!, eventId: String!): [Event]!
  addVisitedDestination(userID: String!, locationID: String!): String!
}
`
