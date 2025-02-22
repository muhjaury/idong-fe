import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Height {
  height?: number;
}

interface IF_Img {
  src?: any;
  display?: string;
}

interface IF_NavWrapper {
  display?: string;
}

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

export const SideBar = styled.div<IF_Height>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 32px;
  width: 300px;
  background: ${color.a2};
  overflow-y: scroll;

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

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SideBarItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer: cursor;
`;

export const SideBarItem = styled.div`
  font-size: 16x;
  font-weight: 600;
  color: ${color.a1};
`;

export const SideBarDropdown = styled.img<IF_Img>`
  height: 16px;
  width: 16px;
  transform: ${({ display }) =>
    display === "Y" ? "rotate(180deg)" : "rotate(0)"};
  transition: 0.2s;
`;

export const SideBarDropWrapper = styled.div<IF_NavWrapper>`
  display: ${({ display }) => (display === "Y" ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  padding-left: 24px;
  gap: 24px;
  align-items: start;
  justify-content: center;
`;

export const Content = styled.div<IF_Height>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 300px;
  padding: 32px;
  background: ${color.a1};
  color: ${color.a6};
  overflow-y: scroll;

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
`;
