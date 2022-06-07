import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ReactNode } from "react"
import { BtnOutline, BtnSolid } from "../../../components/button/Button"
import { thumbnailUrl } from "../../../contents/movie"
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from "../../../contents/style"

const Carousel = styled(Slider)`
  position: relative;

  ul li:first-child {
    margin-right: 25px;
  }

  ul li button {
    &:before {
      width: 15px;
      height: 6px;
      border-radius: 50px;
      content: "";
      color: white;
      z-index: 1;
      background: rgba(255, 255, 255, 0.37);
    }
    &:hover:not(.slick-active button) {
      &:before {
        background: white;
      }
    }
  }

  ul li:first-child button {
    &:before {
      width: 33.81px;
    }
  }

  li.slick-active button:before {
    opacity: 1;
    background: white;
  }
  .slick-prev::before,
  .slick-next::before {
    display: none;
  }

  ${MEDIA_QUERY_MD} {
    ul li {
      margin: 4px;
    }
  }

  ${MEDIA_QUERY_SM} {
    ul li {
      margin: -3px;
    }
    ul li:first-child {
      margin-right: 12px;
    }
    ul li:first-child button {
      &:before {
        width: 18px;
      }
    }

    ul li button {
      &:before {
        width: 8px;
        height: 3px;
      }
    }
  }
`
const Wrap = styled.div`
  width: 100%;
  height: 720px;

  ${MEDIA_QUERY_MD} {
    height: 432px;
  }

  ${MEDIA_QUERY_SM} {
    height: 250px;
  }
`
const Background = styled.div<{ bgUrl: any }>`
  position: relative;
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
    url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
`

const BannerInfo = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;

  ${MEDIA_QUERY_MD} {
    top: 15%;
    left: 8%;
  }
  ${MEDIA_QUERY_SM} {
    top: 35%;
    left: 5%;
  }
`
const BannerRating = styled.p`
  margin: 0;
  font-style: normal;
  font-family: "Roboto";
  font-size: 70px;
  background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);

  ${MEDIA_QUERY_MD} {
    font-size: 61px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 33px;
  }
`
const BannerTitle = styled.p`
  font-weight: 500;
  font-size: 76px;
  margin: 0;
  width: 70vw;

  ${MEDIA_QUERY_MD} {
    width: 90vw;
    font-size: 55px;
  }

  ${MEDIA_QUERY_SM} {
    width: 100vw;
    font-size: 25px;
  }
`

const BannerDesc = styled.p`
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  max-width: 346px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${MEDIA_QUERY_MD} {
    font-size: 14px;
  }

  ${MEDIA_QUERY_SM} {
    display: none;
  }
`

const BannerBtn = styled.div`
  display: flex;
`

const BannerMoreInfo = styled(BtnOutline)`
  &:hover {
    transform: scale(1.05);
  }

  ${MEDIA_QUERY_SM} {
    display: none;
  }
`
const BannerAddToList = styled(BtnSolid)`
  margin-left: 22px;
  &:hover {
    transform: scale(1.05);
  }
  ${MEDIA_QUERY_SM} {
    margin-left: 0px;
  }
`

const DotsBox = styled.div`
  height: 20vh;
  ${MEDIA_QUERY_MD} {
    height: 15vh;
  }
  ${MEDIA_QUERY_SM} {
    height: 10vh;
  }
`

const DotsUl = styled.ul`
  display: flex;
  justify-content: right;
  margin-right: 20px;
`

const Banner = ({ movies }: any) => {
  const selectMovies = movies.slice(0, 10)
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    appendDots: (dots: ReactNode) => (
      <DotsBox>
        <DotsUl>{dots}</DotsUl>
      </DotsBox>
    )
  }
  return (
    <>
      <Carousel {...settings}>
        {selectMovies?.map((movie: any) => (
          <Wrap key={movie?.id}>
            <Background bgUrl={`${thumbnailUrl}${movie?.backdrop_path}`}>
              <BannerInfo>
                <BannerRating>{movie?.vote_average}</BannerRating>
                <BannerTitle>{movie?.name || movie.title}</BannerTitle>
                <BannerDesc>{movie.overview}</BannerDesc>
                <BannerBtn>
                  <BannerMoreInfo>更多資訊</BannerMoreInfo>
                  <BannerAddToList>加入片單</BannerAddToList>
                </BannerBtn>
              </BannerInfo>
            </Background>
          </Wrap>
        ))}
      </Carousel>
    </>
  )
}

export default Banner
