import { color } from "@/constant/color";
import { Interface_Components, Interface_Img } from "@/interface";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div<Interface_Components>`
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

export const Logo = styled.img<Interface_Img>`
  height: 80px;
  width: 80px;
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

export const NavDropdownWrapper = styled.div<Interface_Img>`
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

export const NavDropdown = styled.div<Interface_Img>`
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

export const Menu = styled.img<Interface_Img>`
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

export const SideBarWrapper = styled.div<Interface_Img>`
  display: ${({ display }) => (display === "Y" ? "block" : "none")};
  background: rgba(26, 32, 38, 0.8);
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media all and (min-width: 1024px) {
    display: none;
  }
`;

export const SideBar = styled.div<Interface_Img>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: fixed;
  z-index: 2;
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
  gap: 24px;
  align-items: start;
  justify-content: center;
`;

export const SideBarItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SideBarItem = styled.span`
  color: ${color.a1};
  font-size: 16px;
  font-weight: 600;
`;

export const SideBarDropdown = styled.img<Interface_Img>`
  height: 16px;
  width: 16px;
  transform: ${({ display }) =>
    display === "Y" ? "rotate(180deg)" : "rotate(0)"};
  transition: 0.2s;
`;

export const SideBarDropWrapper = styled.div<Interface_Img>`
  display: ${({ display }) => (display === "Y" ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  padding-left: 24px;
  gap: 24px;
  align-items: start;
  justify-content: center;

  @media all and (min-width: 1024px) {
    display: none;
  }
`;

export const Close = styled.img<Interface_Img>``;
