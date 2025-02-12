import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${color.a1};
  color: ${color.a2};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 32px;
  height: 400px;
  width: 320px;
  background: ${color.a1};
  border: 1px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
