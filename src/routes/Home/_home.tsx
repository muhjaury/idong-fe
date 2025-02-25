import { color } from "@/constant/color";
import styled from "styled-components";

export const Video = styled.video`
  position: absolute;
  z-index: 4;
  left: calc((100% - 300px) / 2);
  width: 300px;

  @media all and (min-width: 1024px) {
    left: calc((100% - 880px) / 2);
    width: 880px;
  }
`;

export const Content2Wrapper = styled.div`
  height: 240px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  @media all and (min-width: 1024px) {
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    margin-top: 320px;
  }
`;

export const Content2Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: ${color.a2};
  margin-bottom: 16px;

  @media all and (min-width: 1024px) {
    margin-bottom: 0;
    width: fit-content;
    text-align: start;
    font-size: 40px;
  }
`;

export const Content2SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Content2SubWrapperFlex = styled.div`
  display: flex;
  gap: 16px;
`;

export const Content2Icon = styled.img`
  height: 24px;
  width: 24px;

  @media all and (min-width: 1024px) {
    height: 40px;
    width: 40px;
  }
`;

export const Content2Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${color.a2};

  @media all and (min-width: 1024px) {
    font-size: 32px;
  }
`;
