import { color } from "@/constant/color";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${color.a2};
`;
