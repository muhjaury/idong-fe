import { color } from "@/constant/color";
import { Interface_Components } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 16px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const PromptText = styled.div<Interface_Components>`
  height: 16px;
  text-align: center;
  font-size: 16px;
  color: ${({ iserror }) => (iserror ? color.a9 : color.a10)};
`;
