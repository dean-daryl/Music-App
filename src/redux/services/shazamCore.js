import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com',
      prepareHeaders: (headers) => {
        headers.set(
          'X-RapidApi-Key',
          '1cc6289a84mshcb6db979254728bp1ad6dfjsn00439851ff4e',
        );
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({
        query: () => '/chart/songs/?date=2019-05-11&range=1-10',
      }),
    }),
  });

  export const {
    useGetTopChartsQuery}=shazamCoreApi
  