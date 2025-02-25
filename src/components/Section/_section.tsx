import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Wrapper {
  type?: string;
}

export const Wrapper = styled.div<IF_Wrapper>`
  position: relative;
  padding: 16px;
  width: 100%;
  min-height: 240px;
  background: ${({ type }) => (type === "secondary" ? color.a1 : color.a2)};
  color: ${({ type }) => (type === "secondary" ? "black" : "white")};

  @media all and (min-width: 1024px) {
    padding: 56px 120px;
  }
`;
