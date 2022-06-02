const API_KEY = process.env.REACT_APP_API_KEY

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=zh-TW`,
    fetchNetflixOriginals: `discover/movie?api_key=${API_KEY}&with_networks=213&language=zh-TW`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=zh-TW`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=99`,
    fetchMovieStreamsById: (id: string) => (
        `movie/${id}?api_key=${API_KEY}&language=zh-TW`
    )
    ,
    fetchMovieDetailById: (id: string) => (
        `credit/${id}?api_key=${API_KEY}`
    ),
    fetchMovieCastAndCrewById: (id: string) => (
        `movie/${id}/credits?api_key=${API_KEY}&language=zh-TW`
    )
}

export default requests