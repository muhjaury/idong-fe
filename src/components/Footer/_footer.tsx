import { color } from "@/constant/color";
import { Interface_Img } from "@/interface";
import styled from "styled-components";

export const WrapperTop = styled.div`
  width: 100%;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: start;
  justify-content: space-between;
  background: ${color.a3};
  color: ${color.a1};

  @media all and (min-width: 768px) {
    padding: 32px 120px 16px;
    flex-direction: row;
  }
`;

export const WrapperBottom = styled.div`
  width: 100%;
  height: 64px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  background: ${color.a4};
  color: ${color.a1};
  font-weight: 600;
  font-size: 12px;

  @media all and (min-width: 768px) {
    padding: 0 120px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
  }
`;

export const Logo = styled.img<Interface_Img>`
  display: none;

  @media all and (min-width: 768px) {
    display: block;
    height: 160px;
    width: 160px;
  }
`;

export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media all and (min-width: 768px) {
    gap: 12px;
  }
`;

export const Description = styled.div`
  max-width: 320px;
`;

export const Copyright = styled.div`
  cursor: context-menu;
`;

export const Navigation = styled.div`
  cursor: pointer;
`;

export const WrapperBottomNavigation = styled.div`
  display: flex;
  gap: 4px;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialMediaLogo = styled.img<Interface_Img>`
  height: 32px;
  width: 32px;
  cursor: pointer;
`;
