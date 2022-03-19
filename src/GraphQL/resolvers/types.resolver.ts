import { DateTime } from 'luxon'

export const Event = {
  today_shows(event) {
    const now = DateTime.local();
    const todayShows = event.shows.filter(show => {
      // Returns only shows of that day.
      return DateTime.fromJSDate(show.date).hasSame(now, 'day');
    })
    return todayShows
  }
};