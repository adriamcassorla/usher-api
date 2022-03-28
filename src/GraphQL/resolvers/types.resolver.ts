import { DateTime } from 'luxon'
import { getStats, isShowActive } from '../../Helpers/events';

export const Event = {
  today_shows(event: EventType) {
    const todayShows = event.shows.filter(isShowActive)
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
  },
  favorite_by(event: EventType) {
    return event.favorite_by.length;
  }
};

export const User = {
  favorite_ids(user: User) {
    return user.favorite_events.map(event => event.id);
  },
}

export const Promoter = {
  active_events(promoter: Promoter) {
    const activeEvents: EventType[] = [];
    promoter.venues.forEach(venue => {
      venue.events.forEach(event => {
        if (event.shows.some(isShowActive)) {
          activeEvents.push(event)
        }
      })
    })
    return activeEvents;
  },
  stats(promoter: Promoter) {
    return getStats(promoter);
  }
}