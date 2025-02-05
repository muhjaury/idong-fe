import { color } from "@/constant/color";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
to {
    transform: rotate(360deg);
}`;

export const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  border-image: linear-gradient(to right, ${color.a1} 0%, ${color.a2} 100%) 1;
  border-width: 4px;
  border-style: solid;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
  border-bottom-right: 3px solid transparent;
  animation: ${rotate} 1.5s linear infinite;
`;
