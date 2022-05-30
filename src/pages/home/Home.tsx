import styled from "styled-components"
import Banner from "./components/Banner"
import MovieRows from "./components/MovieRows"
import {
  useGetTrendingQuery,
  useGetNetflixOriginalsQuery,
  useGetTopRatedQuery,
  useGetActionQuery,
  useGetComedyQuery,
  useGetHorrorQuery,
  useGetRomanceQuery,
  useGetDocumentariesQuery
} from "../../services/Services"

const Container = styled.div`
  min-height: calc(100vh - 58px);
  overflow-x: hidden;
  position: relative;
`
const MoviesContainer = styled.main`
  padding: 0 calc(3.5vw);
  overflow-x: hidden;
`
const CopyRight = styled.div`
  color: #686b72;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 100px;
  text-align: center;
`

export const Home = () => {
  const { data: trendingData } = useGetTrendingQuery()
  const { data: netflixOriginalsData } = useGetNetflixOriginalsQuery()
  const { data: topRatedData } = useGetTopRatedQuery()
  const { data: actionData } = useGetActionQuery()
  const { data: comedyData } = useGetComedyQuery()
  const { data: horrorData } = useGetHorrorQuery()
  const { data: romanceData } = useGetRomanceQuery()
  const { data: documentariesData, isLoading } = useGetDocumentariesQuery()
  const trendingMovies = trendingData?.results
  const netflixOriginalsMovies = netflixOriginalsData?.results
  const topRatedMovies = topRatedData?.results
  const actionMovies = actionData?.results
  const comedyMovies = comedyData?.results
  const horrorMovies = horrorData?.results
  const romanceMovies = romanceData?.results
  const documentariesMovies = documentariesData?.results

  return (
    <Container>
      <Banner />
      <MoviesContainer>
        {!isLoading && (
          <>
            <MovieRows
              category="熱門電影"
              data={trendingMovies}
              evenRow={false}
            />
            <MovieRows
              category="Netflix原創電影"
              data={netflixOriginalsMovies}
              evenRow={true}
            />
            <MovieRows
              category="排行榜"
              data={topRatedMovies}
              evenRow={false}
            />
            <MovieRows category="動作電影" data={actionMovies} evenRow={true} />
            <MovieRows
              category="喜劇電影"
              data={comedyMovies}
              evenRow={false}
            />
            <MovieRows category="恐怖電影" data={horrorMovies} evenRow={true} />
            <MovieRows
              category="愛情電影"
              data={romanceMovies}
              evenRow={false}
            />
            <MovieRows
              category="紀錄片"
              data={documentariesMovies}
              evenRow={true}
            />
          </>
        )}
      </MoviesContainer>
      <CopyRight>挖影 © Code:Justin Kuo / Drsign:K.T</CopyRight>
    </Container>
  )
}
