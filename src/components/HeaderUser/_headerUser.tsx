import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Img {
  src?: any;
  display?: string;
}

export const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: ${color.a3};

  @media all and (min-width: 1024px) {
    padding: 32px 120px;
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

export const Title = styled.span`
  display: none;
  color: ${color.a1};

  @media all and (min-width: 1024px) {
    display: block;
  }
`;
