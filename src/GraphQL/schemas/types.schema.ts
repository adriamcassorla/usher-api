import { gql } from 'apollo-server-express';

export default gql`

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
  type: String!
  genres: [String]!
  image: String
  poster: String
  language: String
  duration: Int
  description: String
  external_url: String!
  venue: Venue
  venue_id: String
  favorite_by: [User]
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
`
