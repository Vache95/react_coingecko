import api from 'app/queryApi';

const homeApi = api.injectEndpoints({
  endpoints: (build) => ({
     getTrandings: build.query({
      query: () => ({ url: `search/trending`, method: 'GET'})
    }),
     getMarkets: build.query({
      query: () => ({ url: '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en', method: 'GET'})
    }),
  }),
});

export const {useGetTrandingsQuery,useGetMarketsQuery} = homeApi;