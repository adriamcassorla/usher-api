import { gql } from 'apollo-server-express';

export default gql`

# Inputs
input dirInput {
  origin: [Float!]!
  range: Int!
  filters: [String]
  type: String!
}

type RouteResp {
  id: String!
  route: Directions!
}

type DestinationResp {
  coordinates: [Float!]!
  name: String!
  altitude: Int
  description: String!
  tags: [String!]!
}

type Query {
  getRoute(input: dirInput!): RouteResp!
  getDestinationInfo(id: String!): DestinationResp!
  getUser(id: String!): user!
}
`
