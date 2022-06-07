import styled from "styled-components"
import { BasicBox } from "../../../components/Layout"
import { languagesTranslator } from "../../../contents/languages"
import { thumbnailUrl } from "../../../contents/movie"

// Interface
interface Props {}
interface genreProps {
  id: string
  name: string
}

// Style components
const DetailBox = styled(BasicBox)`
  height: 470px;
`
const DetailVideo = styled.div`
  width: 323px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
  }
`
const DetailInfo = styled.div`
  margin-left: 35px;
  flex: 1;
`
const GenresBox = styled.div`
  display: flex;

  p {
    background: #161616;
    padding: 10px;
    border: 0.6px solid #ffffff;
    border-radius: 4px;
    margin-right: 10px;
  }
`

const MovieBox = styled.div`
  display: flex;
  align-items: center;
`
const MovieTitle = styled.div`
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 38px;
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
`
const LargeInfoBox = styled.div``
const MiddleInfoBox = styled.div`
  display: flex;
`
const SmallInfoBox = styled.div<{ isRainbowBar: boolean }>`
  display: flex;
  margin-right: 18px;
  margin-bottom: 12px;
  align-items: center;
  div {
    background: ${(props) =>
      props.isRainbowBar
        ? "linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);"
        : null};
    border-radius: 50px;
    width: 3px;
    height: 23px;
  }
  span {
    margin-left: 8px;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    img {
      margin-right: 9px;
      width: 36px;
      height: 36px;
    }
  }
`
//TODO : 把any換掉
const MovieDetail = ({ movieData, peopleData }: any) => {
  return (
    <DetailBox>
      {/* Left */}
      <DetailVideo>
        <img
          src={`${thumbnailUrl}${
            movieData?.poster_path || movieData?.backdrop_path
          }`}
          alt=""
        />
      </DetailVideo>
      {/* Right */}
      <DetailInfo>
        <GenresBox>
          {movieData?.genres.map((genre: genreProps) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </GenresBox>
        {/* Movie Title */}
        <MovieBox>
          <MovieTitle>{movieData?.title}</MovieTitle>
          <MovieRating>{movieData?.vote_average}</MovieRating>
        </MovieBox>
        {/* Movie Info */}
        <LargeInfoBox>
          <MiddleInfoBox>
            <SmallInfoBox isRainbowBar>
              <div></div>
              <span>{movieData?.release_date}</span>
            </SmallInfoBox>
            <SmallInfoBox isRainbowBar>
              <div></div>
              <span>
                {languagesTranslator(movieData?.original_language) ||
                  movieData.original_language}
              </span>
            </SmallInfoBox>
            <SmallInfoBox isRainbowBar>
              <div></div>
              <span>
                {Math.floor(movieData?.runtime / 60)}小時{" "}
                {Math.floor(movieData?.runtime % 60)}分鐘
              </span>
            </SmallInfoBox>
          </MiddleInfoBox>
          <SmallInfoBox isRainbowBar>
            <div></div>
            <span>導演 {peopleData?.crew[0].name}</span>
          </SmallInfoBox>
          <SmallInfoBox isRainbowBar>
            <div></div>
            <span>劇情介紹</span>
          </SmallInfoBox>
          <SmallInfoBox isRainbowBar={false}>
            <div></div>
            <span>{movieData.overview}</span>
          </SmallInfoBox>
          <SmallInfoBox isRainbowBar>
            <div></div>
            <span>播放平台</span>
          </SmallInfoBox>
          <SmallInfoBox isRainbowBar={false}>
            <div></div>
            <span>
              <img src="/images/videoIcons/netflix-icon.png" alt="" />
              <img src="/images/videoIcons/appletv-icon.png" alt="" />
            </span>
          </SmallInfoBox>
        </LargeInfoBox>
      </DetailInfo>
    </DetailBox>
  )
}

export default MovieDetail
