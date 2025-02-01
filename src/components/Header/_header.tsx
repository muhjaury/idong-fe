import { color } from "@/app/constant/color";
import styled from "styled-components";

interface IF_Wrapper {
  scrolled?: boolean;
}

export const Wrapper = styled.div<IF_Wrapper>`
  position: sticky;
  top: 0;
  padding: 16px 80px;
  min-height: 80px;
  background: ${({ scrolled }) => (scrolled ? color.a5 : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s background;
`;

export const WrapperLeft = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
`;

export const WrapperRight = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const Nav = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #d9d9d9;
  }
`;

export const ButtonWrapper = styled.div`
  min-height: 50px;
  display: flex;
  align-items: center;

  > div {
    transition: 0.3s;

    &:hover {
      padding-bottom: 8px;
    }
  }
`;
