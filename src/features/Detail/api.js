import api from 'app/queryApi';

const homeApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHistoryChart: build.query({
      query: ({coinId}) => ({ url: `coins/${coinId}/market_chart?vs_currency=usd&days=7`, method: 'GET'})
    }),
    getCoinDetails: build.query({
      query: ({coinId}) => ({ url: `/coins/${coinId}?localization=false
      &tickers=false&market_data=false&community_data=false&sparkline=false
      `, method: 'GET'})
    }),
  }),
});

export const {useGetHistoryChartQuery,useGetCoinDetailsQuery} = homeApi;