import { color } from "@/constant/color";
import { Interface_Components, Interface_Img } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div<Interface_Components>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 32px 16px;
  width: 100%;
  min-height: 200px;
  background: ${color.a2};
  color: ${color.a1};

  @media all and (min-width: 768px) {
    padding: 56px 120px;
  }
`;

export const BreadcrumbWrapper = styled.div`
  min-height: 14px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: start;
`;

export const Breadcrumb = styled.div`
  font-size: 14px;
  color: ${color.a1};
  cursor: pointer;
`;

export const BreadcrumbArrow = styled.img<Interface_Img>`
  height: 12px;
`;

export const Title = styled.div`
  font-size: 40px;
  color: ${color.a1};
`;
