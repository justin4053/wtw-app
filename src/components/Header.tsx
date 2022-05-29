import { useEffect, useState } from "react"
import styled from "styled-components"

const Nav = styled.nav<{ isScrolled: boolean }>`
  background: ${(props) =>
    props.isScrolled ? "rgba(27, 30, 37, 1)" : "rgba(27, 30, 37, 0.68)"};
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  height: 58px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
  position: fixed;
  z-index: 1;
`
const Logo = styled.img`
  width: 38px;
`
const Title = styled.p`
  min-width: 54px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
`
const Search = styled.div`
  margin-left: 20px;
  padding: 10px 10px 10px 16px;
  display: flex;
  align-items: center;
  width: 387px;
  height: 38px;
  border: 1px solid #686b72;
  border-radius: 8px;
  input {
    width: 100%;
    height: 100%;
    padding-left: 10.5px;
    color: #686b72;
    border: none;
    background-color: transparent;
    outline: none;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  div {
    width: 77px;
    height: 24px;
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
      }
    }
    &:hover {
      a:after {
        transform: scaleX(1);
        opacity: 1;
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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <Nav isScrolled={isScrolled}>
      {/* Nav Left */}
      <Logo src="/images/Logo.png" />
      <Title>挖！影</Title>
      <Search>
        <img src="/images/magnifier.png" alt="" />
        <input type="text" placeholder="搜尋劇名 / 演員" />
      </Search>
      {/* Nav Right */}
      <NavMenu>
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
      </NavMenu>
      <UserImg src="/images/title-profile-pc.png" />
    </Nav>
  )
}

export default Header