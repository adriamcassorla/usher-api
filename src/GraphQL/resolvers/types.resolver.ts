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
    const sortedShows = event.shows.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    const nextShow = sortedShows.find(show => {
      const showDate = DateTime.fromJSDate(new Date(show.date));
      return showDate > now;
    })
    return nextShow
  }
};

export const User = {
  favorite_ids(user: User) {
    return user.favorite_events.map(event => event.id);
  },
}