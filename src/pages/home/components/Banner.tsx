import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ReactNode } from "react"

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
`
const Wrap = styled.div`
  width: 100%;
  height: 720px;
`
const Background = styled.div`
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
    url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-project-12-1644230516.jpg?crop=0.492xw:0.984xh;0,0&resize=640:*");
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
`

const BackgroundInfo = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
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
`
const BackgroundTitle = styled.p`
  color: white;
  font-family: "Noto Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 76px;
  margin: 0;
`

const BannerDesc = styled.p`
  max-width: 346px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BannerBtn = styled.div`
  display: flex;
`
const BtnComponent = styled.a`
  width: 160px;
  height: 42px;
  margin-right: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 900;
  border-radius: 13px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.05);
  }
`

const MoreInfoBtn = styled(BtnComponent)`
  background: linear-gradient(#161616, #161616) padding-box,
    linear-gradient(45deg, purple, orange) border-box;
  border: 2px solid transparent;
`
const ActionBtn = styled(BtnComponent)`
  background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
  border: none;
`

const Banner = () => {
  const movies = Array.from({ length: 10 }, (v, i) => i)
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    appendDots: (dots: ReactNode) => (
      <div style={{ height: "169px" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "right",
            marginRight: "20px"
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    )
  }
  return (
    <>
      <Carousel {...settings}>
        {movies.map((data, index) => (
          <Wrap key={index}>
            <Background>
              <BackgroundInfo>
                <BannerRating>8.6</BannerRating>
                <BackgroundTitle>殭屍校園</BackgroundTitle>
                <BannerDesc>
                  為2022年1月28日上線的Netflix韓國驚悚劇集，由《The King 2
                  Hearts》導演李在奎與《The Package》、《L.U.C.A.: The
                  Beginning》編劇千成日合作打造
                </BannerDesc>
                <BannerBtn>
                  <MoreInfoBtn>更多資訊</MoreInfoBtn>
                  <ActionBtn>加入片單</ActionBtn>
                </BannerBtn>
              </BackgroundInfo>
            </Background>
          </Wrap>
        ))}
      </Carousel>
    </>
  )
}

export default Banner
