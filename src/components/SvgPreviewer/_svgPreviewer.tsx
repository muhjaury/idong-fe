import { Interface_Components } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div<Interface_Components>`
  position: absolute;
  z-index: 1;
  ${({ top }) => top && `top:${top};`}
  ${({ right }) => right && `right:${right};`}
  ${({ bottom }) => bottom && `bottom:${bottom};`}
  ${({ left }) => left && `left:${left};`}
`;

export const Img = styled.img``;
