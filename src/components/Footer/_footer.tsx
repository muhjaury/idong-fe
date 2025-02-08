import { color } from "@/constant/color";
import styled from "styled-components";

interface Int_Logo {
  src: any;
}

export const WrapperTop = styled.div`
  padding: 32px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${color.a3};
  color: ${color.a1};
  width: 100%;
  height: 240px;
`;

export const WrapperBottom = styled.div`
  padding: 32px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${color.a4};
  color: ${color.a1};
  width: 100%;
  height: 40px;
  font-weight: 600;
`;

export const Logo = styled.img<Int_Logo>`
  height: 160px;
  width: 120px;
`;

export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.div`
  font-weight: 600;
`;

export const Description = styled.div``;

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
