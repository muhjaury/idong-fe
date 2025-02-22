import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Height {
  height?: number;
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
  min-height: calc(100vh - 64px - 64px);
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
    display: none;
  }

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SideBarItem = styled.div`
  color: ${color.a1};
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
    display: none;
  }
`;
