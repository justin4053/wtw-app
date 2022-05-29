import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Container = styled.div<{ evenRow: any }>`
  background: ${(props) => (props.evenRow ? "rgba(104, 107, 114, 0.1)" : null)};
  border-radius: 20px;
`
const Box = styled.div`
  padding: 20px 2rem 40px;
`
const Carousel = styled(Slider)`
  padding: 0 3rem;
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
  .slick-dots {
    display: none !important;
  }
  .slick-arrow {
    top: 40%;
  }
  .slick-prev {
    left: -5px;
  }
  .slick-next {
    right: -5px;
  }
`
const Wrap = styled.div`
  display: flex;
  text-align: center;
  padding: 0 8px;
  cursor: pointer;
  div {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 8px;
      background: linear-gradient(
        180deg,
        rgba(22, 22, 22, 0) 30.58%,
        rgba(22, 22, 22, 0.98) 100%
      );
    }
    p {
      margin: 0;
      padding: 2px;
      width: 33px;
      background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
      border-radius: 4px;
      position: absolute;
      right: 4px;
      bottom: 8px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
    }
  }
  img {
    width: 100%;
    border-radius: 8px;
  }
`
const Category = styled.h2`
  font-weight: 400;
  padding-left: 3.5rem;
  font-size: 20px;
  margin-bottom: 14px;
`

const MovieTitle = styled.p`
  margin: 4px;
  font-size: 14px;
`

function SamplePrevArrow(props: any) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img
        src={"images/arrow-left-solid.png"}
        {...props}
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  )
}
function SampleNextArrow(props: any) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img
        src={"images/arrow-right-solid.png"}
        {...props}
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  )
}

const MovieRows = ({ evenRow }: any) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Container evenRow={evenRow}>
      <Box>
        <Category>熱門電影</Category>
        <Carousel {...settings}>
          <Wrap>
            <div>
              <img src="images/banner.jpeg" alt="" />
              <p>8.3</p>
            </div>
            <MovieTitle>殭屍校園</MovieTitle>
          </Wrap>
          <Wrap>
            <div>
              <img src="images/banner.jpeg" alt="" />
              <p>8.3</p>
            </div>
            <MovieTitle>殭屍校園</MovieTitle>
          </Wrap>
          <Wrap>
            <div>
              <img src="images/banner.jpeg" alt="" />
              <p>8.3</p>
            </div>
            <MovieTitle>殭屍校園</MovieTitle>
          </Wrap>
          <Wrap>
            <div>
              <img src="images/banner.jpeg" alt="" />
              <p>8.3</p>
            </div>
            <MovieTitle>殭屍校園</MovieTitle>
          </Wrap>
          <Wrap>
            <div>
              <img src="images/banner.jpeg" alt="" />
              <p>8.3</p>
            </div>
            <MovieTitle>殭屍校園</MovieTitle>
          </Wrap>
          <Wrap>
            <div>
              <img src="images/banner.jpeg" alt="" />
              <p>8.3</p>
            </div>
            <MovieTitle>殭屍校園</MovieTitle>
          </Wrap>
          <Wrap>
            <div>
              <img src="images/banner.jpeg" alt="" />
              <p>8.3</p>
            </div>
            <MovieTitle>殭屍校園</MovieTitle>
          </Wrap>
        </Carousel>
      </Box>
    </Container>
  )
}

export default MovieRows
