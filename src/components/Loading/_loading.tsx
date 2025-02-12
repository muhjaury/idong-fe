import { color } from "@/constant/color";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
to {
    transform: rotate(360deg);
}`;

export const Wrapper = styled.div`
  background: ${color.a3};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const LoadingWrapper = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(26, 32, 38, 0.8);
`;

export const Load = styled.div`
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
