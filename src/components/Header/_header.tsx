import { color } from "@/constant/color";
import styled, { keyframes } from "styled-components";

interface IF_Wrapper {
  scrolled?: string;
}

interface IF_Img {
  src?: any;
}

interface IF_NavWrapper {
  display?: string;
}

export const Wrapper = styled.div<IF_Wrapper>`
  position: sticky;
  z-index: 5;
  top: 0;
  padding: 32px 16px;
  height: 100px;
  background: ${({ scrolled }) =>
    scrolled === "Y" ? "rgba(26, 32, 38, 0.8)" : `${color.a2}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s background;

  @media all and (min-width: 1024px) {
    padding: 32px 120px;
  }
`;

export const WrapperLeft = styled.div`
  background: transparent;
  position: relative;
`;

export const Logo = styled.img<IF_Img>`
  height: 80px;
  width: 60px;
`;

export const WrapperRight = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media all and (min-width: 1024px) {
    gap: 48px;
  }
`;

export const NavWrapper = styled.div`
  display: none;

  @media all and (min-width: 1024px) {
    display: block;
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

export const Nav = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${color.a5};
  }
`;

export const NavDropdownWrapper = styled.div<IF_NavWrapper>`
  display: ${({ display }) => (display === "Y" ? "flex" : "none")};
  position: absolute;
  min-height: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const dropdownAppear = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`;

export const NavDropdown = styled.div<IF_NavWrapper>`
  position: absolute;
  display: ${({ display }) => (display === "Y" ? "flex" : "none")};
  min-height: 100px;
  min-width: 100px;
  top: 24px;
  padding: 16px;
  flex-direction: column;
  gap: 16px;
  background: ${color.a1};
  animation: ${dropdownAppear} 1s;
  border-radius: 16px;
`;

export const Dropdown = styled.div`
  color: ${color.a2};
  font-weight: 600;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  min-height: 50px;
  display: flex;
  align-items: center;

  > div {
    transition: 0.2s;

    &:hover {
      padding-bottom: 8px;
    }
  }
`;

export const Menu = styled.img<IF_Img>`
  display: block;
  height: 40px;
  width: 40px;
  cursor: pointer;

  @media all and (min-width: 1024px) {
    display: none;
  }
`;

const sideBarAppear = keyframes`
from {
  width: 0px;
}
to {
  width: 300px;
}
`;

const sideBarHide = keyframes`
from {
  width: 300px;
}
to {
  width: 0px;
}
`;

export const SideBar = styled.div<IF_NavWrapper>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 300px;
  margin-left: ${({ display }) => (display === "Y" ? "0" : "-300px")};
  background: ${color.a2};
  white-space: nowrap;
  overflow-x: hidden;
  animation: ${({ display }) => (display === "Y" ? sideBarAppear : sideBarHide)}
    0.5s;
  transition: 0.5s cubic-bezier(0.36, -0.01, 0, 0.77);
  padding: 26px 16px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media all and (min-width: 1024px) {
    display: none;
  }
`;

export const SideBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const Close = styled.img<IF_Img>``;
