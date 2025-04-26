import { color } from "@/constant/color";
import { Interface_Img } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 320px;
  width: 280px;
`;

export const Top = styled.img<Interface_Img>`
  background: ${color.a1};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 220px;
  width: 100%;
  object-fit: cover;
`;

export const Bottom = styled.div`
  background: ${color.a1};
  border-top: 1px solid ${color.a5};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 12px;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
