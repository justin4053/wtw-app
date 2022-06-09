import styled from "styled-components"
import { BtnSolid } from "../../../components/button/Button"
import { BasicBox } from "../../../components/Layout"
import { languagesTranslator } from "../../../contents/languages"
import { thumbnailUrl } from "../../../contents/movieUrl"
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from "../../../contents/style"

// Interface
interface genreProps {
  id: string
  name: string
}

// Style components
const DetailBox = styled(BasicBox)`
  display: flex;
  width: 100%;

  ${MEDIA_QUERY_MD} {
    border-radius: 0;
  }

  ${MEDIA_QUERY_SM} {
    padding: 0;
    flex-direction: column;
    background: transparent;
  }
`
const DetailVideo = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
  }
  ${MEDIA_QUERY_SM} {
    img {
      display: none;
    }
  }
`

const DetailInfo = styled.div`
  margin-left: 35px;
  flex: 1;
`

const GenresBox = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex: 1;

    p {
      background: #161616;
      padding: 8px;
      border: 0.6px solid #ffffff;
      border-radius: 4px;
      margin-right: 10px;
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
    }
  }
`

const BtnMDBox = styled.div`
  display: flex;
  justify-content: flex-end;

  ${MEDIA_QUERY_SM} {
    display: none !important;
  }
`

const DetailBtn = styled(BtnSolid)`
  ${MEDIA_QUERY_SM} {
    width: 103px;
    height: 27px;
    margin-top: 8px;
  }
`

const MovieBox = styled.div`
  display: flex;
  align-items: center;

  ${MEDIA_QUERY_SM} {
    display: none;
  }
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

  ${MEDIA_QUERY_MD} {
    span {
      -webkit-line-clamp: 2;
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
          <div>
            {movieData?.genres.map((genre: genreProps) => (
              <p key={genre?.id}>{genre?.name}</p>
            ))}
          </div>
          {/* 加入片單 */}
          <BtnMDBox>
            <DetailBtn>加入片單</DetailBtn>
          </BtnMDBox>
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
                  movieData?.original_language}
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
            <span>{movieData?.overview}</span>
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
