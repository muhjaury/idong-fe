import { color } from "@/constant/color";
import { Interface_Components } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div<Interface_Components>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  width: 100%;
  min-height: 240px;
  background: ${({ type }) =>
    type === "secondary"
      ? color.a1
      : type === "tertiary"
      ? color.a8
      : color.a2};
  color: ${({ type }) => (type === "secondary" ? "black" : "white")};

  @media all and (min-width: 768px) {
    padding: 56px 120px;
    > div {
      max-width: 1160px;
    }
  }
`;
