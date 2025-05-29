import { color } from "@/constant/color";
import { Interface_Components } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Close = styled.img<Interface_Components>`
  z-index: 100;
  position: absolute;
  height: 32px;
  width: 32px;
  right: calc((100vw - 344px) / 2);
  top: calc((100vh - 464px) / 2);
  cursor: pointer;

  @media all and (min-width: 768px) {
    right: calc(
      (100vw - ${({ type }) => (type === "secondary" ? "408px" : "942px")}) / 2
    );
    top: calc((100vh - 456px) / 2);
  }
`;

export const Content = styled.div<Interface_Components>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: ${color.a1};
  padding: 40px;
  color: ${color.a2};
  overflow: hidden;

  width: 360px;
  height: 480px;
  margin-left: calc((100vw - 360px) / 2);
  margin-top: calc((100vh - 480px) / 2);

  @media all and (min-width: 768px) {
    width: ${({ type }) => (type === "secondary" ? "440px" : "960px")};
    height: 480px;
    margin-left: calc(
      (100vw - ${({ type }) => (type === "secondary" ? "440px" : "960px")}) / 2
    );
    margin-top: calc((100vh - 480px) / 2);
  }
`;
