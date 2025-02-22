import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: ${color.a3};

  @media all and (min-width: 1024px) {
    padding: 32px 120px;
  }
`;

export const Title = styled.span`
  color: ${color.a1};
`;
