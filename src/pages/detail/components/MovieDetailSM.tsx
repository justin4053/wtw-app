import styled from "styled-components"
import { BtnSolid } from "../../../components/button/Button"
import { thumbnailUrl } from "../../../contents/movie"
import { MEDIA_QUERY_SM } from "../../../contents/style"

const DetailBackGround = styled.div<{ bgUrl: any }>`
  display: none;
  position: relative;

  ${MEDIA_QUERY_SM} {
    display: flex;
    width: 100%;
    height: 250px;
    background-image: linear-gradient(
        360deg,
        #1b1e25 0%,
        rgba(27, 30, 37, 0) 29.22%
      ),
      radial-gradient(
        72.5% 427.7% at 96.33% 50%,
        rgba(27, 30, 37, 0) 39.58%,
        rgba(27, 30, 37, 0.93) 94.79%
      ),
      url(${(props) => (props.bgUrl ? props.bgUrl : null)});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
  }
`

const MovieBoxSMSize = styled.div`
  position: absolute;
  left: 5%;
  top: 40%;
`

const MovieTitle = styled.div`
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 38px;

  ${MEDIA_QUERY_SM} {
    font-size: 25px;
  }
`

const MovieRating = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
  margin-left: 18px;

  ${MEDIA_QUERY_SM} {
    margin: 0;
    font-size: 33px;
  }
`

const DetailBtn = styled(BtnSolid)`
  ${MEDIA_QUERY_SM} {
    width: 103px;
    height: 27px;
    margin-top: 8px;
  }
`

const MovieDetailSM = ({ movieData }: any) => {
  return (
    <DetailBackGround bgUrl={`${thumbnailUrl}${movieData?.backdrop_path}`}>
      <MovieBoxSMSize>
        <MovieTitle>{movieData?.title}</MovieTitle>
        <MovieRating>{movieData?.vote_average}</MovieRating>
        <DetailBtn>加入片單</DetailBtn>
      </MovieBoxSMSize>
    </DetailBackGround>
  )
}

export default MovieDetailSM
