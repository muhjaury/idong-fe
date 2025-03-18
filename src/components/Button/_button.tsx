import { color } from "@/constant/color";
import { Interface_Components } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Btn = styled.button<Interface_Components>`
  padding: 8px 16px;
  color: black;
  font-weight: 600;
  background: white;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border: 1px solid
    ${({ removeshadow }) =>
      removeshadow === "Y" ? `${color.a2}` : `${color.a1}`};
  ${({ removeshadow }) =>
    removeshadow !== "Y" &&
    `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`}
  min-width: 80px;
  min-height: 40px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: #d9d9d9;
    color: #1a1a1a;
    border: 1px solid #d9d9d9;
  }
`;
