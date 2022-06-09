import { AnyRecord } from "dns"
import { useState } from "react"
import styled from "styled-components"
import { BtnSolid } from "../../../components/button/Button"
import { BasicBox } from "../../../components/Layout"
import { AllGenres } from "../../../contents/movieGenres"
import { useGetMoviesByParamsQuery } from "../../../services/Services"
import SearchCards from "./SearchCards"

interface SelectWrapProps {
  colorChanged: number
  selectId: number
}

interface BarProps {
  value: number
}

const Container = styled.div``

const SearchBox = styled(BasicBox)`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-evenly;
  flex-direction: column;
  align-content: center;
  min-height: 324px;
`
const SortBox = styled(BasicBox)`
  margin-top: 12px;
  min-height: 68px;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
`

const SubBox = styled.div``

const SubTile = styled.div`
  display: flex;
  margin-right: 18px;
  margin-bottom: 12px;
  align-items: center;
  div:first-child {
    background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
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
  }
`

const SelectBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const SelectGenreWrap = styled.div<SelectWrapProps>`
  margin-bottom: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 66px;
  height: 28px;
  background: ${(props) =>
    props.selectId === props.colorChanged
      ? "linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%)"
      : "#161616"};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  p {
    font-family: "PingFang SC";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin: 0;
  }
`
const SelectYearWrap = styled(SelectGenreWrap)``

const BarWrap = styled.div`
  position: relative;
  margin-left: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Bar = styled.input.attrs({
  type: "range",
  min: "0",
  max: "10",
  step: "1"
})<BarProps>`
  appearance: none;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  outline: 0;
  width: 250px;
  height: 16px;
  border-radius: 50px;
  border: 3px solid #161616;
  background: ${(props) => `
  linear-gradient(to right,
    #161616 0%,
    #161616 ${props.value * 10}%,
    #C10171 ${props.value * 10}%,
    #5C00F2 100%);
    
  `};

  &::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none !important;
    width: 26px;
    height: 26px;
    background: ${(props) =>
      `
    url("data:image/svg+xml,%3Csvg width='26' height='26' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='55%25' font-size='16' fill='%23ffffff' font-family='sans-serif' text-anchor='middle' dominant-baseline='middle'%3E${props.value}%3C/text%3E%3C/svg%3E"),
    linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%)
    `};
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 4px solid #161616;
  }

  &::-webkit-range-thumb {
    appearance: none;
    -webkit-appearance: none !important;
    width: 26px;
    height: 26px;
    background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
    border-radius: 50%;
    border: 4px solid #161616;
  }
`
const SearchBtn = styled(BtnSolid)`
  position: absolute;
  bottom: 1em;
  right: 1em;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`

const SelectSortWrap = styled(SelectGenreWrap)`
  width: 102px;
  height: 32px;
`

const SearchBlock = () => {
  const [genreActiveId, setGenreActiveId] = useState<number>(0)
  const [yearActiveId, setYearActiveId] = useState<number>(0)
  const [sortActiveId, setSortActiveId] = useState<number>(0)
  const [value, setValue] = useState<number>(5)
  const [data, setData] = useState<any>()
  const {
    data: searchData,
    isLoading,
    isSuccess
  } = useGetMoviesByParamsQuery({
    genre: genreActiveId,
    year: yearActiveId,
    value: value
  })
  const currentTime = new Date()
  const yearArray: number[] = [...Array(13)].map(
    (e, i) => currentTime.getFullYear() - i
  )
  return (
    <>
      {!isSuccess ? (
        <></>
      ) : (
        <Container>
          <SearchBox>
            <SubBox>
              <SubTile>
                <div></div>
                <span>類型</span>
              </SubTile>
              <SelectBox>
                <SelectGenreWrap
                  onClick={() => setGenreActiveId(0)}
                  colorChanged={genreActiveId}
                  selectId={0}
                >
                  <p>全部</p>
                </SelectGenreWrap>
                {AllGenres.map((genres) => (
                  <SelectGenreWrap
                    // TODO: 試試看可不可以傳key值進去做比較,取代movieId
                    key={genres.id}
                    onClick={() => setGenreActiveId(genres.id)}
                    colorChanged={genreActiveId}
                    selectId={genres.id}
                  >
                    <p>{genres["zh-name"]}</p>
                  </SelectGenreWrap>
                ))}
              </SelectBox>
            </SubBox>
            <SubBox>
              <SubTile>
                <div></div>
                <span>年份</span>
              </SubTile>
              <SelectBox>
                <SelectYearWrap
                  onClick={() => setYearActiveId(0)}
                  colorChanged={yearActiveId}
                  selectId={0}
                >
                  <p>全部</p>
                </SelectYearWrap>
                {yearArray.map((year) => (
                  <SelectYearWrap
                    key={year}
                    onClick={() => setYearActiveId(year)}
                    colorChanged={yearActiveId}
                    selectId={year}
                  >
                    <p>{year}</p>
                  </SelectYearWrap>
                ))}
              </SelectBox>
            </SubBox>
            <SubBox>
              <SubTile>
                <div></div>
                <span>評分</span>
                <BarWrap>
                  0
                  <Bar
                    className="range-consideration"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                  />
                  10
                </BarWrap>
              </SubTile>
              <SearchBtn onClick={() => setData(searchData)}>搜尋</SearchBtn>
            </SubBox>
          </SearchBox>
          <SortBox>
            <SelectSortWrap
              onClick={() => setSortActiveId(0)}
              colorChanged={sortActiveId}
              selectId={0}
            >
              <p>人氣</p>
            </SelectSortWrap>
            <SelectSortWrap
              onClick={() => setSortActiveId(1)}
              colorChanged={sortActiveId}
              selectId={1}
            >
              <p>評分</p>
            </SelectSortWrap>
            <SelectSortWrap
              onClick={() => setSortActiveId(2)}
              colorChanged={sortActiveId}
              selectId={2}
            >
              <p>上映日</p>
            </SelectSortWrap>
            <SelectSortWrap
              onClick={() => setSortActiveId(3)}
              colorChanged={sortActiveId}
              selectId={3}
            >
              <p>片名</p>
            </SelectSortWrap>
          </SortBox>
          <SearchCards data={data} />
        </Container>
      )}
    </>
  )
}

export default SearchBlock
