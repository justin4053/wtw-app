import styled from "styled-components"
import { MainContainer } from "../../components/Layout"
import MovieDetail from "./components/MovieDetail"
import { useParams } from "react-router-dom"
import {
  useGetMovieCastAndCrewByIdQuery,
  useGetMovieStreamsByIdQuery
} from "../../services/Services"
import MovieCast from "./components/MovieCast"

// TODO : 直接以電影id去搜尋整部資訊 更新redux

const Container = styled(MainContainer)`
  margin-top: 82px;
`

const Detail = () => {
  const { id } = useParams()
  const { data: movieInfoData } = useGetMovieStreamsByIdQuery(id as string)
  const { data: moviePeopleData, isLoading } = useGetMovieCastAndCrewByIdQuery(
    id as string
  )
  return (
    <>
      {!isLoading && (
        <Container>
          {/* MovieDetail */}
          <MovieDetail movieData={movieInfoData} peopleData={moviePeopleData} />
          {/* Cast List */}
          <MovieCast peopleData={moviePeopleData} />
          {/* Recommendations */}
          {/* Similar Movies */}
        </Container>
      )}
    </>
  )
}

export default Detail
