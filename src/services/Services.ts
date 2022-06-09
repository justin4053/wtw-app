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
            }
        }),
        getNetflixOriginals: builder.query<any,void>({
            query: () => {
                return requests.fetchNetflixOriginals
            }
        }),
        getTopRated: builder.query<any,void>({
            query: () => {
                return requests.fetchTopRated
            }
        }),
        getAction: builder.query<any,void>({
            query: () => {
                return requests.fetchActionMovies
            }
        }),
        getComedy: builder.query<any,void>({
            query: () => {
                return requests.fetchComedyMovies
            }
        }),
        getHorror: builder.query<any,void>({
            query: () => {
                return requests.fetchHorrorMovies
            }
        }),
        getRomance: builder.query<any,void>({
            query: () => {
                return requests.fetchRomanceMovies
            }
        }),
        getDocumentaries: builder.query<any,void>({
            query: () => {
                return requests.fetchDocumentaries
            }
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