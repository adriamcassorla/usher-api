import * as query from './query.resolver';
import * as mutation from './mutation.resolver';
import * as types from './types.resolver';

export default {
  Query: {
    getCityEvents: query.getCityEvents,
    getEvent: query.getEvent,
    getProfile: query.getProfile,
  }, 
  Mutation: {
    addFav: mutation.addFav,
    deleteFav: mutation.deleteFav,
    createTicket: mutation.createTicket,
    useTicket: mutation.useTicket,
  },
  Event: types.Event,
};
