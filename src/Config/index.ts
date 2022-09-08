const Config = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.PACKAGE_VERSION,
  },
  i18n: {
    debbug: JSON.parse(
      (import.meta.env.VITE_I18N_DEBBUG ?? 'false').toLocaleLowerCase(),
      // Converts 'true' to true and 'false' to false
    ),
  },
  services: {
    pokeApi: { baseURL: import.meta.env.VITE_API_GRAPHQL_BASE_URL },
    tradingCardApi: { baseURL: import.meta.env.VITE_API_POKEMONTCG_BASE_URL },
  },
};

export default Config;
