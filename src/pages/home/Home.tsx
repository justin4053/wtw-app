import styled from "styled-components"
import Banner from "./components/Banner"
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
import CardList from "../../components/CardList"
import { MEDIA_QUERY_MD } from "../../contents/style"

const Container = styled.div`
  min-height: calc(100vh - 58px);
  overflow-x: hidden;
  position: relative;
`
const MoviesContainer = styled.main`
  padding: 0 calc(3.5vw);
  margin-top: -6rem;

  ${MEDIA_QUERY_MD} {
    padding: 0;
    margin-top: -3rem;
  }
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
    <>
      {!isLoading && (
        <Container>
          <Banner movies={trendingMovies} />
          <MoviesContainer>
            <CardList
              category="熱門電影"
              data={trendingMovies}
              isEvenRow={false}
              isOneRow={false}
            />
            <CardList
              category="Netflix原創電影"
              data={netflixOriginalsMovies}
              isEvenRow={true}
              isOneRow={false}
            />
            <CardList
              category="排行榜"
              data={topRatedMovies}
              isEvenRow={false}
              isOneRow={false}
            />
            <CardList
              category="動作電影"
              data={actionMovies}
              isEvenRow={true}
              isOneRow={false}
            />
            <CardList
              category="喜劇電影"
              data={comedyMovies}
              isEvenRow={false}
              isOneRow={false}
            />
            <CardList
              category="恐怖電影"
              data={horrorMovies}
              isEvenRow={true}
              isOneRow={false}
            />
            <CardList
              category="愛情電影"
              data={romanceMovies}
              isEvenRow={false}
              isOneRow={false}
            />
            <CardList
              category="紀錄片"
              data={documentariesMovies}
              isEvenRow={true}
              isOneRow={false}
            />
          </MoviesContainer>
          <CopyRight>挖影 © Code:Justin Kuo / Drsign:K.T</CopyRight>
        </Container>
      )}
    </>
  )
}
