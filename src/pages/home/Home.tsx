import styled from "styled-components"
import Banner from "./components/Banner"

const Container = styled.div`
  min-height: calc(100vh - 58px);
  overflow-x: hidden;
  position: relative;
`
const MoviesContainer = styled.main`
  padding: 0 calc(3.5vw);
  overflow-x: hidden;
`
export const Home = () => {
  return (
    <Container>
      <Banner />
      <MoviesContainer></MoviesContainer>
    </Container>
  )
}
