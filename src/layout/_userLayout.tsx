import { color } from "@/constant/color";
import { Interface_Components, Interface_Img } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  min-height: calc(100vh - 100px - 64px);
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const SideBar = styled.div<Interface_Components>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 32px;
  width: 300px;
  background: ${color.a2};
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-left: ${({ display }) => (display === "Y" ? "0" : "-300px")};
  transition: 0.5s cubic-bezier(0.36, -0.01, 0, 0.77);
  z-index: 2;

  @media all and (min-width: 768px) {
    transition: unset;
    margin-left: 0;
    z-index: unset;

    &::-webkit-scrollbar {
      // display: none;
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${color.a1};
    }

    &::-webkit-scrollbar-thumb {
      background: ${color.a4};
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export const SideBarItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const SideBarItem = styled.div`
  font-size: 16x;
  font-weight: 600;
  color: ${color.a1};
  cursor: pointer;
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
`;

export const Content = styled.div<Interface_Components>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 32px;
  background: ${color.a1};
  color: ${color.a6};
  overflow-y: scroll;
  transition: 0.5s cubic-bezier(0.36, -0.01, 0, 0.77);

  &::-webkit-scrollbar {
    // display: none;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${color.a1};
  }

  &::-webkit-scrollbar-thumb {
    background: ${color.a4};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${color.a2};
  }

  @media all and (min-width: 768px) {
    left: 300px;
    transition: unset;
  }
`;

export const ContentOverlay = styled.div<Interface_Components>`
  display: ${({ display }) => (display === "Y" ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(26, 32, 38, 0.8);
  z-index: 1;

  @media all and (min-width: 768px) {
    display: none;
  }
`;
