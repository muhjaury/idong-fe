import { color } from "@/constant/color";
import { Interface_Components } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Btn = styled.button<Interface_Components>`
  padding: 8px 16px;
  color: ${({ type }) =>
    ["secondary", "tertiary"].includes(type!) ? "#ffffff" : "#000000"};
  font-weight: 600;
  background: ${({ type }) =>
    type === "secondary"
      ? "#099ee3"
      : type === "tertiary"
      ? "#ff0000"
      : "#ffffff"};
  border-radius: 16px;
  border: 1px solid
    ${({ removeshadow, type }) =>
      removeshadow === "Y"
        ? type === "secondary"
          ? "#099ee3"
          : type === "tertiary"
          ? "#ff0000"
          : `${color.a2}`
        : `${color.a1}`};
  ${({ removeshadow }) =>
    removeshadow !== "Y" &&
    `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`}
  min-width: ${({ width }) => (width ? width : "80px")};
  min-height: ${({ height }) => (height ? height : "32px")};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${({ type }) =>
      type === "secondary"
        ? "#0773a6"
        : type === "tertiary"
        ? "#b80000"
        : "#d9d9d9"};
    color: ${({ type }) =>
      ["secondary", "tertiary"].includes(type!) ? "#ffffff" : "#000000"};
    border: 1px solid #d9d9d9;
  }
`;
