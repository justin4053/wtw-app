import styled from "styled-components"
import Banner from "./components/Banner"
import MovieRows from "./components/MovieRows"

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
  return (
    <Container>
      <Banner />
      <MoviesContainer>
        <MovieRows evenRow={false} />
        <MovieRows evenRow={true} />
        <MovieRows evenRow={false} />
        <MovieRows evenRow={true} />
        <MovieRows evenRow={false} />
        <MovieRows evenRow={true} />
      </MoviesContainer>
      <CopyRight>挖影 © Code:Justin Kuo / Drsign:K.T</CopyRight>
    </Container>
  )
}
