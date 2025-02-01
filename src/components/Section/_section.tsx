import { color } from "@/app/constant/color";
import styled from "styled-components";

interface Int_Wrapper {
  type?: string;
}

export const Wrapper = styled.div<Int_Wrapper>`
  padding: 16px;
  width: 100%;
  min-height: 320px;
  background: ${({ type }) => (type === "secondary" ? color.a1 : color.a2)};
  color: ${({ type }) => (type === "secondary" ? "black" : "white")};
`;
