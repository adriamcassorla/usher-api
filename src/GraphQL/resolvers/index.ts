import * as query from './query.resolver';
//import * as mutation from './mutation.resolver';

export default {
  Query: {
    getShows: query.getShows,
  },
  Mutation: {
  },
};
