import { gql } from 'apollo-server-express';

import mutation from './mutation.schema';
import query from './query.schema';
import types from './types.schema';

export default gql`
  ${mutation}
  ${query}
  ${types}
`;
