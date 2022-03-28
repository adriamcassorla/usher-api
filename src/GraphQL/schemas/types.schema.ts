import { gql } from 'apollo-server-express';
import GraphQLJSON from 'graphql-type-json';

export default gql`
scalar JSON

type User {
  id: String
  email: String!
  password: String!
  first_name: String!
  last_name: String!
  created_at: String
  favorite_events: [Event]!
  favorite_ids: [Int]!
  tickets: [Ticket]!
  notifications: Boolean!
}

type Event {
  id: Int
  name: String! 
  price: Float!
  type: EventTypes!
  genres: [String]!
  image: String
  poster: String
  language: String
  duration: Int
  description: String
  external_url: String!
  venue: Venue
  venue_id: String
  favorite_by: Int
  shows: [Show]
  today_shows: [Show]
  next_show: Show
}

type Venue {
  id: String
  name: String!
  external_url: String!
  address: String!
  zipcode: String!
  city: String!
  latitude: Float!
  longitude: Float!
  events: [Event]!
  promoter: Promoter! 
  promoter_id: Int
}

type Ticket {
  id: String
  show: Show
  show_id: String
  used: Boolean
  user: User
  user_id: String
}

type Promoter {
  id: Int
  name: String!
  email: String!
  password: String!
  venues: [Venue]!
  telephone: Int
  active_events: [Event]
  stats: Stats
}

type StatsDetails {
  seats: Int
  sold_tickets: Int
  sales: Float
}

type RangeStats {
  total: StatsDetails
  by_event: JSON
}

type Stats {
  day: RangeStats
  week: RangeStats
  month: RangeStats
  year: RangeStats
}

type Show {
  id: String
  date: String!
  active_sale: Boolean!
  available_seats: Int!
  tickets: [Ticket]!
  event: Event!
  event_id: Int
}

enum EventTypes {
  THEATER
  CONCERT
  CINEMA
  CIRCUS
}

type SignInResponse {
    error: String
    user: User
    token: String
}

type PromoterSignInResponse {
  error: String
  promoter: Promoter
  token: String
}

type TicketResponse {
  error: String
  show: Show
}
`
