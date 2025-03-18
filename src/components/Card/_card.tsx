import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 240px;
  min-width: 200px;
`;

export const Top = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 12px;
  height: 160px;
  width: 100%;
`;

export const Bottom = styled.div`
  border-top: 1px solid ${color.a5};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 12px;
  height: 80px;
  width: 100%;
`;
