import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './api';

const queryApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: [
    'Home',
    'Details'
  ],
  endpoints: () => ({}),
});

export default queryApi;