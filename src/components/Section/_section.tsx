import { color } from "@/app/constant/color";
import styled from "styled-components";

interface IF_Wrapper {
  type?: string;
}

export const Wrapper = styled.div<IF_Wrapper>`
  overflow: hidden;
  position: relative;
  padding: 32px;
  width: 100%;
  min-height: 320px;
  background: ${({ type }) => (type === "secondary" ? color.a1 : color.a2)};
  color: ${({ type }) => (type === "secondary" ? "black" : "white")};
`;
