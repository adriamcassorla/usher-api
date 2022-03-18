import { gql } from 'apollo-server-express';

export default gql`
# Routes (TomTom API Response)
type Directions {
  formatVersion: String!
  routes: [Route!]
}

type Route {
  summary: Summary
  legs: [Legs]!
  sections: [Section]
  guidance: Guidance
}

type Summary {
  lengthInMeters: Int!
  travelTimeInSeconds: Int!
  trafficDelayInSeconds: Int
  trafficLengthInMeters: Int
  departureTime: String!
  arrivalTime: String!
}

type Legs {
  summary: Summary!
  points: [Point!]!
}

type Point {
  latitude: Float!
  longitude: Float!
}

type Section {
  startPointIndex: Int!
  endPointIndex: Int!
  sectionType: String!
  travelMode: String!
}

type Guidance {
  instructions: [Instruction]
  instructionGroups: [InstructionGroup]
}

type Instruction {
  routeOffsetInMeters: Int!
  travelTimeInSeconds: Int!
  point: Point!
  pointIndex: Int!
  instructionType: String!
  roadNumbers: [String]
  exitNumber: String
  street: String
  signpostText: String
  countryCode: String
  stateCode: String
  junctionType: String
  turnAngleInDecimalDegrees: Int
  roundaboutExitNumber: Int
  possibleCombineWithNext: Boolean
  drivingSide: String
  maneuver: String
  message: String
  combinedMessage: String
}

type InstructionGroup {
  firstInstructionIndex: Int
  lastInstructionIndex: Int
  groupMessage: String
  groupLengthInMeters: Int
}

# Mongo DB
type location {
  _id: String!
  name: String!
  coordinates: [Float!]!
  altitude: Int!
  description: String!
  tags: [String!]!
}

type user {
  name: String!
  surname: String!
  email: String!
  password: String!
  visited_locations: [location]
}
`
