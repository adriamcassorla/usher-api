import * as query from './query.resolver';
import * as mutation from './mutation.resolver';

export default {
  Query: {
    getCityEvents: query.getCityEvents,
    getEvent: query.getEvent,
    getProfile: query.getProfile,
  },
  Mutation: {
    addFav: mutation.addFav,
    deleteFav: mutation.deleteFav,
  },
};
