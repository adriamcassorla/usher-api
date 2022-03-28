import { DateTime, DateTimeUnit } from 'luxon'

export const isShowActive = (show: Show) => {
  const showDate = DateTime.fromJSDate(new Date(show.date));
  const now = DateTime.local();
  const isToday = showDate.hasSame(now, 'day') && showDate > now;
  return show.active_sale && isToday;
}

type StatsDetails = {
  seats: number
  sold_tickets: number
  sales: number
}
type RangeStats = {
  total: StatsDetails;
  by_event: {
    [key: string]: StatsDetails
  }
}
type Stats = {
  day: RangeStats
  week: RangeStats
  month: RangeStats
  year: RangeStats
}

export const getStats = (promoter: Promoter) => {
  // Initial values at 0;
  const stats = {
    day: { total: { seats: 0, sold_tickets: 0, sales: 0 }, by_event: {} },
    week: { total: { seats: 0, sold_tickets: 0, sales: 0 }, by_event: {} },
    month: { total: { seats: 0, sold_tickets: 0, sales: 0 }, by_event: {} },
    year: { total: { seats: 0, sold_tickets: 0, sales: 0 }, by_event: {} }
  }

  const ranges = Object.keys(stats);
  promoter.venues.forEach(venue => {
    venue.events.forEach(event => {
      // Inititalises values for this current event
      ranges.forEach(range => {
        stats[range].by_event[event.name] = { seats: 0, sold_tickets: 0, sales: 0 };
      })
      event.shows.forEach(show => {
        const showDate = DateTime.fromJSDate(new Date(show.date));
        const now = DateTime.local();
        // Saves the information for each range
        ranges.forEach(range => {
          if (showDate.hasSame(now, range as DateTimeUnit)) {
            stats[range].total.seats += show.available_seats;
            stats[range].total.sold_tickets += show.tickets.length;
            stats[range].total.sales += show.tickets.length * event.price;
            stats[range].by_event[event.name].seats += show.available_seats;
            stats[range].by_event[event.name].sold_tickets += show.tickets.length;
            stats[range].by_event[event.name].sales += show.tickets.length * event.price;
          };
        })
      })
    })
  })
  return stats;
}