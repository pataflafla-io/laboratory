// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CounterResponse } from '@/applications/counter/interfaces/CounterResponse'

// Define a service using a base URL and expected endpoints
export const counterApi = createApi({
    reducerPath: 'counterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: (build) => ({
        getCounterInitialValue: build.query({
            query: () => '/counter',
        }),
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCounterInitialValueQuery } = counterApi