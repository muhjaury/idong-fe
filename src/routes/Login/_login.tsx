import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Img {
  src?: any;
  display?: string;
}

export const Wrapper = styled.div`
  background: ${color.a1};
  color: ${color.a2};
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Card = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  padding: 32px;
  width: 320px;
  background: ${color.a1};
  border: 1px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  > div > button {
    width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Logo = styled.img<IF_Img>`
  height: 100px;
  width: 80px;
`;
