import { color } from "@/constant/color";
import { Interface_Components, Interface_Img } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonWrapper = styled.div<Interface_Components>`
  position: relative;
  display: ${({ display }) => (display === "Y" ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  background: ${color.a3};
  cursor: pointer;

  input[type="file"] {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    width: 120px;
    height: 40px;
    cursor: pointer;
  }
`;

export const Input = styled.input``;

export const Label = styled.span`
  color: ${color.a1};
  cursor: pointer;
`;

export const FileWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${color.a2};
  border-radius: 8px;
  padding: 8px;
  width: 200px;
  height: 32px;
  background: ${color.a1};
`;

export const FileLabel = styled.div`
  color: ${color.a2};
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
`;

export const Close = styled.img<Interface_Img>`
  height: 12px;
  width: 12px;
  cursor: pointer;
`;
