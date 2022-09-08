import { ApolloClient, InMemoryCache } from '@apollo/client';

import Config from 'Config';

const GraphQLClient = new ApolloClient({
  uri: Config.services.pokeApi.baseURL,
  cache: new InMemoryCache(),
});

export default GraphQLClient;
