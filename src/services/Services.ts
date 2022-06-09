import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../contents/movieUrl'
import requests from "../utils/requests"

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: (builder) => ({
        getTrending: builder.query<any,void>({
            query: () => {
                return requests.fetchTrending
            },transformResponse: (res: any) => res.results
        }),
        getNetflixOriginals: builder.query<any,void>({
            query: () => {
                return requests.fetchNetflixOriginals
            },transformResponse: (res: any) => res.results
        }),
        getTopRated: builder.query<any,void>({
            query: () => {
                return requests.fetchTopRated
            },transformResponse: (res: any) => res.results
        }),
        getAction: builder.query<any,void>({
            query: () => {
                return requests.fetchActionMovies
            },transformResponse: (res: any) => res.results
        }),
        getComedy: builder.query<any,void>({
            query: () => {
                return requests.fetchComedyMovies
            },transformResponse: (res: any) => res.results
        }),
        getHorror: builder.query<any,void>({
            query: () => {
                return requests.fetchHorrorMovies
            },transformResponse: (res: any) => res.results
        }),
        getRomance: builder.query<any,void>({
            query: () => {
                return requests.fetchRomanceMovies
            },transformResponse: (res: any) => res.results
        }),
        getDocumentaries: builder.query<any,void>({
            query: () => {
                return requests.fetchDocumentaries
            },transformResponse: (res: any) => res.results
        }),
        getMovieStreamsById: builder.query<string,string>({
            query: (id) => {
                return requests.fetchMovieStreamsById(id)
            }
        }),
        getMovieDetailById: builder.query<string,string>({
            query: (id) => {
                return requests.fetchMovieDetailById(id)
            }
        }),
        getMovieCastAndCrewById: builder.query<string,string>({
            query: (id) => {
                return requests.fetchMovieCastAndCrewById(id)
            }
        })
    }),
})

export const {
    useGetTrendingQuery,
    useGetNetflixOriginalsQuery,useGetTopRatedQuery,useGetActionQuery,useGetComedyQuery,useGetHorrorQuery,useGetRomanceQuery,useGetDocumentariesQuery,useGetMovieStreamsByIdQuery,useGetMovieDetailByIdQuery,useGetMovieCastAndCrewByIdQuery } = moviesApi
export const moviesApiReducer = moviesApi.reducer