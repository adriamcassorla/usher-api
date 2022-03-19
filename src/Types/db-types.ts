type User = {
  id: String,
  email: String,
  password: String,
  first_name: String,
  last_name: String,
  created_at: String,
  favorite_events: EventType[]
  tickets: [Ticket],
  notifications: Boolean,
}

type EventType = {
  id: Number,
  name: String,
  price: Number,
  type: String,
  genres: String[],
  image?: String,
  poster?: String,
  language?: String,
  duration?: Number,
  description?: String,
  external_url?: String,
  venue: Venue,
  venue_id: String,
  favorite_by: User[],
  shows: Show[],
}

type Venue = {
  id: String,
  name: String,
  external_url?: String,
  address: String,
  zipcode: String,
  city: String,
  latitude: Number,
  longitude: Number,
  events: EventType[],
  promoter: Promoter,
  promoter_id: Number,
}

type Ticket = {
  id: String,
  show: Show,
  show_id: String,
  used: Boolean,
  user: User,
  user_id: String,
}

type Promoter = {
  id: Number,
  name: String,
  email: String,
  password: String,
  venues: Venue[],
  telephone?: Number
}

type Show = {
  id: String,
  date: String,
  active_sale: Boolean,
  available_seats: Number,
  tickets: Ticket[],
  event: EventType,
  event_id: Number
}