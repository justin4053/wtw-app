import styled from "styled-components"
import { BasicBox } from "../../../components/Layout"
import { thumbnailUrl } from "../../../contents/movieUrl"
import { MEDIA_QUERY_MD } from "../../../contents/style"

const CastBox = styled(BasicBox)`
  height: 136px;
  margin-top: 18px;

  ${MEDIA_QUERY_MD} {
    border-radius: 0;
    margin-bottom: 20px;
  }
`
const InnerBox = styled.div`
  width: 100%;
  display: flex;
`
const CardContainer = styled.div`
  /* border: 1px solid white; */
  height: 116px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
const CastCard = styled.div`
  margin: 0 6px;
  height: 116px;
  text-align: center;
  img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 12px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
  }
  p {
    font-family: "Roboto";
    line-height: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin: 0;
  }
`
// TODO: 增加peopleData的type
const MovieCast = ({ peopleData }: any) => {
  return (
    <CastBox>
      <InnerBox>
        <CardContainer>
          {peopleData?.cast.map((peopleData: any) => (
            <CastCard key={peopleData.id}>
              {peopleData.profile_path ? (
                <img src={`${thumbnailUrl}${peopleData.profile_path}`} alt="" />
              ) : (
                <img
                  src="http://d.ifengimg.com/mw604/y0.ifengimg.com/ifengimcp/pic/20160418/5628dd6ecd9fa100f371_size30_w521_h534.jpg"
                  alt=""
                />
              )}

              <p>{peopleData.name}</p>
            </CastCard>
          ))}
        </CardContainer>
      </InnerBox>
    </CastBox>
  )
}

export default MovieCast
