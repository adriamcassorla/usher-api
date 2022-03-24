import { DateTime } from 'luxon'

export const Event = {
  today_shows(event: EventType) {
    const now = DateTime.local();
    const todayShows = event.shows.filter(show => {
      // Returns only shows of that day.
      const showDate = DateTime.fromJSDate(new Date(show.date));
      return showDate.hasSame(now, 'day') && showDate > now;
    })
    return todayShows
  },
  next_show(event: EventType) {
    const now = DateTime.local();
    const nextShow = event.shows.find(show => {
      // Returns the first show after today.
      const showDate = DateTime.fromJSDate(new Date(show.date));
      return showDate > now;
    })
    return nextShow
  }
};

export const User = {
  favorite_ids(user: User) {
    const favIDs: number[] = [];
    user.favorite_events.forEach(event => favIDs.push(event.id));
    return favIDs;
  },
}