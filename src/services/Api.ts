import axios from 'axios';

import Config from 'Config';

const Api = axios.create({
  baseURL: Config.services.tradingCardApi.baseURL,
});

Api.interceptors.request.use((config) => {
  return {
    ...config,
    // params: {
    //   ...config.params,
    // },
  };
});

export default Api;
