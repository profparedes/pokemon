import React, { Suspense } from 'react';

import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';

import 'services/i18n';

import 'bootstrap/dist/css/bootstrap.min.css';

import { PokemonProvider } from 'context/PokemonContext';
import { PokemonTCGProvider } from 'context/PokemonTCGContext';

import GraphQLClient from 'services/Apollo';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <ApolloProvider client={GraphQLClient}>
        <PokemonProvider>
          <PokemonTCGProvider>
            <App />
          </PokemonTCGProvider>
        </PokemonProvider>
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>,
);
