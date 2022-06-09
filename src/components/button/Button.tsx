import styled from "styled-components"
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from "../../contents/style"

const Btn = styled.div`
  width: 160px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 900;
  border-radius: 13px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  ${MEDIA_QUERY_MD} {
    width: 140px;
  }
  ${MEDIA_QUERY_SM} {
    border-radius: 8px;
    font-size: 14px;
    width: 103px;
    height: 27px;
  }
`
export const BtnOutline = styled(Btn)`
  background: linear-gradient(#161616, #161616) padding-box,
    linear-gradient(45deg, purple, orange) border-box;
  border: 2px solid transparent;
`
export const BtnSolid = styled(Btn)`
  background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
  border: none;
`
