import styled from "styled-components"
import Card from "../../../components/card/Card"
import { MainContainer } from "../../../components/Layout"
import { thumbnailUrl } from "../../../contents/movieUrl"

const Container = styled(MainContainer)`
  margin-top: 12px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 10px;
  height: 100%;
`
const CardContainer = styled.div`
  margin: 10px 0;
  padding: 0 8px;
`

const SearchCards = ({ data }: any) => {
  console.log(data)
  return (
    <Container>
      {data?.map((movie: any) => (
        <CardContainer key={movie.id}>
          <Card
            to={`/detail/${movie.id}`}
            src={`${thumbnailUrl}${movie?.poster_path}`}
            rating={movie?.vote_average}
            name={movie?.name || movie?.title}
            isSamllPic={false}
            isOneRow={false}
          />
        </CardContainer>
      ))}
    </Container>
  )
}

export default SearchCards
