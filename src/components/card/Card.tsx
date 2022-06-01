import styled from "styled-components"
import { Link } from "react-router-dom"

interface CardProps {
  src: string
  rating: number
  name: string
  to: string
}

const CardWrap = styled.div`
  text-align: center;

  p {
    font-family: "Noto Sans TC";
    font-weight: 400;
    font-size: 14px;
    margin-top: 4px;
  }
`
const CardBox = styled.div`
  position: relative;
  &:after {
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
  }
`
const CardImgBox = styled.div`
  width: 152px;
  min-width: 103px;
  height: 201px;
  min-height: 128;
`
const CardRating = styled.div`
  color: white;
  z-index: 1;
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
  font-weight: 800;
  font-size: 14px;
`
const CardName = styled.div`
  color: white;
`

const Card = ({ src, rating, name, to }: CardProps) => {
  return (
    <CardWrap>
      <Link to={to}>
        <CardBox>
          <CardImgBox>
            <img src={src} alt={name} />
          </CardImgBox>
          <CardRating>{rating}</CardRating>
        </CardBox>
        <CardName>{name}</CardName>
      </Link>
    </CardWrap>
  )
}

export default Card
