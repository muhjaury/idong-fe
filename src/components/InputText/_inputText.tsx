import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrappper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  color: ${color.a2};
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  height: 48px;
  width: 100%;
  padding: 0 16px;
  background: white;
  border: 1px solid ${color.a5};
  border-radius: 8px;
  color: ${color.a3};
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;
