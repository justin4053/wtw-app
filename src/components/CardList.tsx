import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { thumbnailUrl } from "../contents/movieUrl"
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from "../contents/style"
import Card from "./card/Card"

interface Props {
  category: string
  data: any
  isEvenRow: boolean
  isOneRow: boolean
}

interface MoviesBoxProps {
  isEvenRow: boolean
  isOneRow: boolean
}

// Styled Components
const ComponentBox = styled.div<{ isEvenRow: boolean }>`
  background: ${(props) =>
    props.isEvenRow ? "rgba(104, 107, 114, 0.1)" : null};
  border-radius: 20px;

  ${MEDIA_QUERY_MD} {
    border-radius: 0px;
  }
`

const InnerBox = styled.div<{ isEvenRow: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 0px 50px;

  ${MEDIA_QUERY_MD} {
    padding: ${(props) => (props.isEvenRow ? "16px 0px 0px" : "16px 0px 0px")};
  }
`

const MoviesBox = styled.div<MoviesBoxProps>`
  display: flex;
  margin: 8px 6.5em 0px;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  ${MEDIA_QUERY_MD} {
    margin: 0px;
    flex-wrap: ${(props) =>
      props.isOneRow ? "nowrap" : props.isEvenRow ? "wrap" : null};
    display: ${(props) =>
      props.isOneRow ? "flex" : props.isEvenRow ? "grid" : "flex"};
    grid-template-columns: repeat(5, 1fr);
  }

  ${MEDIA_QUERY_SM} {
    margin: 0px;
    flex-wrap: ${(props) =>
      props.isOneRow ? "nowrap" : props.isEvenRow ? "wrap" : null};
    display: ${(props) =>
      props.isOneRow ? "flex" : props.isEvenRow ? "grid" : "flex"};
    grid-template-columns: repeat(3, 1fr);
  }
`

const ArrowBox = styled.div`
  cursor: pointer;
  position: absolute;
  img {
    width: 50px;
    height: 50px;
  }
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`

const ArrowLeftBox = styled(ArrowBox)`
  left: 2em;
`

const ArrowRightBox = styled(ArrowBox)`
  right: 2em;
`

const Title = styled.p`
  margin: 0 0 0 7rem;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  ${MEDIA_QUERY_MD} {
    margin-left: 0;
    padding-left: 8px;
  }
`
const CardContainer = styled.div`
  margin: 10px 0;
  padding: 0 8px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.05);
  }

  ${MEDIA_QUERY_MD} {
    padding: 0 4.5px;
    margin: 20px 0 50px;
  }
`

const CardList = ({ category, data, isEvenRow, isOneRow }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)
  const [selectData, setSelectData] = useState(data)
  // ??????Device???????????????Data??????(??????)

  const NewData = () => {
    if (window.innerWidth <= 428 && isEvenRow) {
      setSelectData(data?.slice(0, 6))
    } else if (window.innerWidth <= 768 && isEvenRow) {
      setSelectData(data?.slice(0, 10))
    } else {
      setSelectData(data)
    }
  }
  useEffect(() => {
    NewData()
    window.addEventListener("resize", NewData)
    return () => {
      window.removeEventListener("resize", NewData)
    }
  }, [])

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
    <ComponentBox isEvenRow={isEvenRow}>
      <InnerBox isEvenRow={isEvenRow}>
        <Title>{category}</Title>
        <ArrowLeftBox onClick={() => handleClick("left")}>
          <img src="/images/arrow-left-solid.png" alt="" />
        </ArrowLeftBox>
        <MoviesBox ref={rowRef} isEvenRow={isEvenRow} isOneRow={isOneRow}>
          {selectData?.map((movie: any) => (
            <CardContainer key={movie.id}>
              <Card
                to={`/detail/${movie.id}`}
                src={`${thumbnailUrl}${movie?.poster_path}`}
                rating={movie?.vote_average}
                name={movie?.name || movie?.title}
                isSamllPic={isEvenRow}
                isOneRow={isOneRow}
              />
            </CardContainer>
          ))}
        </MoviesBox>
        <ArrowRightBox onClick={() => handleClick("right")}>
          <img src="/images/arrow-right-solid.png" alt="" />
        </ArrowRightBox>
      </InnerBox>
    </ComponentBox>
  )
}

export default CardList
