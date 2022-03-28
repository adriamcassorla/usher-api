type User = {
  id: string,
  email: string,
  password: string,
  first_name: string,
  last_name: string,
  created_at: string,
  favorite_events: EventType[]
  tickets: [Ticket],
  notifications: Boolean,
}

type EventType = {
  id: number,
  name: string,
  price: number,
  type: string,
  genres: string[],
  image?: string,
  poster?: string,
  language?: string,
  duration?: number,
  description?: string,
  external_url?: string,
  venue: Venue,
  venue_id: string,
  favorite_by: User[],
  shows: Show[],
}

type Venue = {
  id: string,
  name: string,
  external_url?: string,
  address: string,
  zipcode: string,
  city: string,
  latitude: number,
  longitude: number,
  events: EventType[],
  promoter: Promoter,
  promoter_id: number,
}

type Ticket = {
  id: string,
  show: Show,
  show_id: string,
  used: Boolean,
  user: User,
  user_id: string,
}

type Promoter = {
  id: number,
  name: string,
  email: string,
  password: string,
  venues: Venue[],
  telephone?: number
  active_events: EventType[]
}

type Show = {
  id: string,
  date: string,
  active_sale: Boolean,
  available_seats: number,
  tickets: Ticket[],
  event: EventType,
  event_id: number
}

type EventInput = {
  name: string,
  price: number,
  type: 'THEATER' | 'CONCERT' | 'CINEMA' | 'CIRCUS',
  genres: string[],
  image: string,
  poster: string,
  language: string,
  duration: number,
  description: string,
  external_url?: string,
  venue_id: string,
  shows: {
    date: number
    active_sale?: boolean,
    available_seats: number
  },
}