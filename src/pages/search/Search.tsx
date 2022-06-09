import styled from "styled-components"
import { MainContainer } from "../../components/Layout"
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from "../../contents/style"
import SearchBlock from "./components/SearchBlock"

const Container = styled(MainContainer)`
  margin-top: 82px;
  margin-bottom: 46px;

  /* ${MEDIA_QUERY_MD} {
    padding: 0;
  }
  ${MEDIA_QUERY_SM} {
    margin-top: 0;
  } */
`

const MovieSearch = () => {
  //TODO: 接收url的type param後顯示不同的類型頁面(movie search or drama search)

  return (
    <Container>
      <SearchBlock />
    </Container>
  )
}

export default MovieSearch
