import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Wrapper {
  scrolled?: string;
}

interface IF_IMG {
  src?: any;
}

export const Wrapper = styled.div<IF_Wrapper>`
  position: sticky;
  z-index: 5;
  top: 0;
  padding: 32px 16px;
  height: 100px;
  background: ${({ scrolled }) =>
    scrolled === "true" ? "rgba(26, 32, 38, 0.8)" : `${color.a2}`};
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

export const Logo = styled.img<IF_IMG>`
  height: 80px;
  width: 60px;
`;

export const WrapperRight = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const Nav = styled.span`
  display: none;

  @media all and (min-width: 1024px) {
    display: block;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: #d9d9d9;
    }
  }
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

export const Menu = styled.img<IF_IMG>`
  display: block;
  height: 40px;
  width: 40px;
  cursor: pointer;

  @media all and (min-width: 1024px) {
    display: none;
  }
`;
