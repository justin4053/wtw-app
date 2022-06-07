import styled from "styled-components"
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from "../../contents/style"

interface Props {
  position: string
}

const NavMenu = styled.div<{ position: string }>`
  display: ${(props) => (props.position === "header" ? "flex" : "none")};
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  div {
    width: 77px;
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
        bottom: -16px;
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
        font-size: 14px;
      }
    }

    &:hover {
      a:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  ${MEDIA_QUERY_MD} {
    div {
      width: 60px;
      margin-right: 3px;
    }
  }

  ${MEDIA_QUERY_SM} {
    display: ${(props) => (props.position === "header" ? "none" : "flex")};
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: #161616;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
    height: 56px;
    padding: 0px;
    div {
      width: 100%;
      margin: 0;

      > a span {
        font-family: "PingFang SC";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        color: #686b72;
      }
    }
  }
`
const UserImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
`

const Menu = ({ position }: Props) => {
  return (
    <NavMenu position={position}>
      <div>
        <a>
          <span>電影</span>
        </a>
      </div>
      <div>
        <a>
          <span>戲劇</span>
        </a>
      </div>
      <div>
        <a>
          <span>主題館</span>
        </a>
      </div>
      <div>
        <a>
          <span>我的片單</span>
        </a>
      </div>
      <UserImg src="/images/title-profile-pc.png" />
    </NavMenu>
  )
}

export default Menu
