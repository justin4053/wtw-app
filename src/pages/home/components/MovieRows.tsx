import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Movie } from "../../../../typings"
import { thumbnailUrl } from "../../../contents/movie"

// interface CustomArrowProps {
//   key?: string
//   "data-role"?: string
//   className?: string
//   style?: React.CSSProperties
//   onClick?: React.MouseEventHandler<any>
//   currentSlide?: number
//   slideCount?: number
// }

// const Container = styled.div<{ evenRow: any }>`
//   background: ${(props) => (props.evenRow ? "rgba(104, 107, 114, 0.1)" : null)};
//   border-radius: 20px;
// `
// const Box = styled.div`
//   padding: 2em 2em 4.5em;
// `
// const Carousel = styled(Slider)`
//   padding: 0 3rem;
//   .slick-prev:before,
//   .slick-next:before {
//     display: none;
//   }
//   .slick-dots {
//     display: none !important;
//   }
//   .slick-arrow {
//     top: 45%;
//   }
//   .slick-prev {
//     left: -0.4rem;
//   }
//   .slick-next {
//     right: -0.4rem;
//   }
// `
// const Wrap = styled.div`
//   overflow: hidden;
//   display: flex;
//   text-align: center;
//   padding: 20px;
//   cursor: pointer;
//   min-width: 123px;
//   min-height: 163px;
//   div {
//     display: flex;
//     position: relative;
//     &:before {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       bottom: 0;
//       right: 0;
//       border-radius: 8px;
//       background: linear-gradient(
//         180deg,
//         rgba(22, 22, 22, 0) 30.58%,
//         rgba(22, 22, 22, 0.98) 100%
//       );
//     }
//     p {
//       margin: 0;
//       padding: 2px;
//       width: 33px;
//       background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
//       box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
//       border-radius: 4px;
//       position: absolute;
//       right: 4px;
//       bottom: 8px;
//       font-family: "Roboto";
//       font-style: normal;
//       font-weight: 800;
//       font-size: 14px;
//     }
//   }
//   img {
//     width: 100%;
//     height: 100%;
//     border-radius: 8px;
//     object-fit: fill;
//   }
// `
// const Category = styled.h2`
//   font-weight: 400;
//   padding-left: 4.5rem;
//   font-size: 20px;
//   margin-bottom: 14px;
// `

// const MovieTitle = styled.p`
//   margin: 4px;
//   font-size: 14px;
// `

// function SamplePrevArrow({
//   currentSlide,
//   slideCount,
//   ...props
// }: CustomArrowProps) {
//   const { className, onClick } = props
//   return (
//     <div className={className} onClick={onClick}>
//       <img
//         src={"images/arrow-left-solid.png"}
//         {...props}
//         style={{ width: "50px", height: "50px" }}
//       />
//     </div>
//   )
// }
// function SampleNextArrow({
//   currentSlide,
//   slideCount,
//   ...props
// }: CustomArrowProps) {
//   const { className, onClick } = props
//   return (
//     <div className={className} onClick={onClick}>
//       <img
//         src={"images/arrow-right-solid.png"}
//         {...props}
//         style={{ width: "50px", height: "50px" }}
//       />
//     </div>
//   )
// }

// const MovieRows = ({ category, data, evenRow }: any) => {
//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1366,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 988,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   }
//   return (
//     <Container evenRow={evenRow}>
//       <Box>
//         <Category>{category}</Category>
//         <Carousel {...settings}>
//           {data?.map((movie: any) => (
//             <Wrap key={movie.id}>
//               <div>
//                 <a href="">
//                   <img src={`${thumbnailUrl}${movie.poster_path}`} alt="" />
//                 </a>
//                 <p>{movie.vote_average}</p>
//               </div>
//               <MovieTitle>{movie.name || movie.title}</MovieTitle>
//             </Wrap>
//           ))}
//         </Carousel>
//       </Box>
//     </Container>
//   )
// }

// export default MovieRows
