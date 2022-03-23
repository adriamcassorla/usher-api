import * as query from './query.resolver';
import * as mutation from './mutation.resolver';
import * as types from './types.resolver';
import * as auth from './auth.resolver'

export default {
  Query: {
    getCityEvents: query.getCityEvents,
    getEvent: query.getEvent,
    getProfile: query.getProfile,
    login: auth.login,
  },
  Mutation: {
    addFav: mutation.addFav,
    deleteFav: mutation.deleteFav,
    createTickets: mutation.createTickets,
    useTicket: mutation.useTicket,
    createUser: auth.createUser,
  },
  Event: types.Event,
};
