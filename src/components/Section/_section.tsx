import { color } from "@/constant/color";
import { Interface_Components } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div<Interface_Components>`
  position: relative;
  padding: 32px 16px;
  width: 100%;
  min-height: 240px;
  background: ${({ type }) => (type === "secondary" ? color.a1 : color.a2)};
  color: ${({ type }) => (type === "secondary" ? "black" : "white")};

  @media all and (min-width: 1024px) {
    padding: 56px 120px;
  }
`;
