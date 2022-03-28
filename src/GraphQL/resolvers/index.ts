import * as query from './query.resolver';
import * as mutation from './mutation.resolver';
import * as types from './types.resolver';
import * as auth from './auth.resolver'

export default {
  Query: {
    getCityEvents: query.getCityEvents,
    getEvent: query.getEvent,
    getUser: auth.getUser,
    validateShow: query.validateShow,
    getTicketUsage: query.getTicketUsage,
    getPromoter: auth.getPromoter,
  },
  Mutation: {
    addFav: mutation.addFav,
    deleteFav: mutation.deleteFav,
    createTickets: mutation.createTickets,
    validateTicket: mutation.validateTicket,
    createUser: auth.createUser,
    createPromoter: auth.createPromoter,
  },
  Event: types.Event,
  User: types.User
};
