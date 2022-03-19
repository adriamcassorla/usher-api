import { gql } from 'apollo-server-express';

export default gql` 
input InputPoint {
  latitude: Float!
  longitude: Float!
}

type Mutation {
  addFav(userId: String!, eventId: Int!): [Event]!
  deleteFav(userId: String!, eventId: Int!): [Event]!
}
`
