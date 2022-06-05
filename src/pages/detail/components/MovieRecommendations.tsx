import styled from "styled-components"
import { BasicBox } from "../../../components/Layout"

const RecommendationsBox = styled(BasicBox)`
  height: 619px;
  margin-top: 12px;
`
const MyReco = styled.div``
const OthersReco = styled.div``

const MovieRecommendations = () => {
  return (
    <RecommendationsBox>
      <MyReco></MyReco>
      <OthersReco></OthersReco>
    </RecommendationsBox>
  )
}

export default MovieRecommendations
