import styled from "styled-components";

interface IF_Wrapper {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export const Wrapper = styled.div<IF_Wrapper>`
  position: absolute;
  z-index: 1;
  ${({ top }) => top && `top:${top};`}
  ${({ right }) => right && `right:${right};`}
  ${({ bottom }) => bottom && `bottom:${bottom};`}
  ${({ left }) => left && `left:${left};`}
`;

export const Img = styled.img``;
