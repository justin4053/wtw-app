import { useRef, useState } from "react"
import styled from "styled-components"
import { thumbnailUrl } from "../contents/movie"
import Card from "./card/Card"
import { MainContainer } from "./Layout"

interface Props {
  category: string
  data: any
  isEvenRow: boolean
}

const Container = styled(MainContainer)``
const ComponentBox = styled.div<{ isEvenRow: boolean }>`
  background: ${(props) =>
    props.isEvenRow ? "rgba(104, 107, 114, 0.1)" : null};
  border-radius: 20px;
`
const InnerBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 0px 50px;
`
const MoviesBox = styled.div`
  display: flex;
  margin: 8px 6.5em 0px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
const ArrowLeftBox = styled.div`
  cursor: pointer;
  position: absolute;
  left: 2em;

  img {
    width: 50px;
    height: 50px;
  }
`
const ArrowRightBox = styled.div`
  cursor: pointer;
  position: absolute;
  right: 2em;

  img {
    width: 50px;
    height: 50px;
  }
`
const Title = styled.p`
  margin: 0 0 0 7rem;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`
const CardContainer = styled.div`
  margin: 10px 0;
  padding: 0 8px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.05);
  }
`

const CardList = ({ category, data, isEvenRow }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)
  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }
  return (
    <Container>
      <ComponentBox isEvenRow={isEvenRow}>
        <InnerBox>
          <Title>{category}</Title>
          <ArrowLeftBox onClick={() => handleClick("left")}>
            <img src="images/arrow-left-solid.png" alt="" />
          </ArrowLeftBox>
          <MoviesBox ref={rowRef}>
            {data?.map((movie: any) => (
              <CardContainer key={movie.id}>
                <Card
                  to={`/detail/${movie.id}`}
                  src={`${thumbnailUrl}${movie.poster_path}`}
                  rating={movie.vote_average}
                  name={movie.name || movie.title}
                />
              </CardContainer>
            ))}
          </MoviesBox>
          <ArrowRightBox onClick={() => handleClick("right")}>
            <img src="images/arrow-right-solid.png" alt="" />
          </ArrowRightBox>
        </InnerBox>
      </ComponentBox>
    </Container>
  )
}

export default CardList
