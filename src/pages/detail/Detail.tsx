import styled from "styled-components"
import { MainContainer } from "../../components/Layout"
import MovieDetail from "./components/MovieDetail"
import { useParams } from "react-router-dom"
import {
  useGetMovieCastAndCrewByIdQuery,
  useGetMovieStreamsByIdQuery,
  useGetTrendingQuery
} from "../../services/Services"
import MovieCast from "./components/MovieCast"
import MovieRecommendations from "./components/MovieRecommendations"
import CardList from "../../components/CardList"
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from "../../contents/style"
import { BtnSolid } from "../../components/button/Button"
import MovieDetailSM from "./components/MovieDetailSM"
import { useState } from "react"
import { NoInfer } from "@reduxjs/toolkit/dist/query/tsHelpers"

// TODO : 直接以電影id去搜尋整部資訊 更新redux

interface stateProps {
  state: boolean
}

const Container = styled(MainContainer)`
  margin-top: 82px;
  margin-bottom: 46px;

  ${MEDIA_QUERY_MD} {
    padding: 0;
  }
  ${MEDIA_QUERY_SM} {
    margin-top: 0;
  }
`

const SwitchBox = styled.div`
  display: none;

  ${MEDIA_QUERY_SM} {
    display: flex;
    justify-content: space-evenly;

    div {
      width: 100%;
      margin-right: 7px;
      text-align: center;
      cursor: pointer;
      position: relative;

      a {
        text-decoration: none;

        &:after {
          content: "";
          height: 5px;
          background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
          border-radius: 50px;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          opacity: 1;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }

        span {
          color: white;
          font-family: "Noto Sans TC";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
        }
      }
    }
  }
`

const LeftBtn = styled.div<stateProps>`
  a:after {
    transform: ${(props) =>
      props.state ? "scaleX(1)" : "scaleX(0)"} !important;
  }
`
const RightBtn = styled.div<stateProps>`
  a:after {
    transform: ${(props) =>
      props.state ? "scaleX(1)" : "scaleX(0)"} !important;
  }
`
const Controller = styled.div<stateProps>`
  ${MEDIA_QUERY_SM} {
    display: ${(props) => props.state && "none"};
  }
`

const Space = styled.div`
  height: 50px;
`

const Detail = () => {
  const { id } = useParams()
  const { data: trendingData } = useGetTrendingQuery()
  const { data: movieInfoData } = useGetMovieStreamsByIdQuery(id as string)
  const { data: moviePeopleData, isLoading } = useGetMovieCastAndCrewByIdQuery(
    id as string
  )

  const [state, setState] = useState(false)
  const switchBtnHandler = (direction: string) => {
    if (direction === "left") {
      setState(false)
    } else {
      setState(true)
    }
  }
  return (
    <>
      {!isLoading && (
        <Container>
          <MovieDetailSM movieData={movieInfoData} />
          <SwitchBox>
            <LeftBtn state={!state} onClick={() => switchBtnHandler("left")}>
              <a>
                <span>介紹</span>
              </a>
            </LeftBtn>
            <RightBtn state={state} onClick={() => switchBtnHandler("right")}>
              <a>
                <span>評論</span>
              </a>
            </RightBtn>
          </SwitchBox>
          {/* MovieDetail */}
          <Controller state={state}>
            <MovieDetail
              movieData={movieInfoData}
              peopleData={moviePeopleData}
            />
          </Controller>
          {/* Cast List */}
          <Controller state={state}>
            <MovieCast peopleData={moviePeopleData} />
          </Controller>
          {/* Recommendations */}
          <Controller state={!state}>
            <MovieRecommendations />
          </Controller>
          {/* Similar Movies */}
          <Controller state={state}>
            <CardList
              category="相關影片"
              // TODO: 之後資料要串回相關影片 用Search ById
              data={trendingData?.results}
              isEvenRow={true}
              isOneRow={true}
            />
          </Controller>
          <Space />
        </Container>
      )}
    </>
  )
}

export default Detail
