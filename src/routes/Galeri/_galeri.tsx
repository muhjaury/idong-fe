import { color } from "@/constant/color";
import { Interface_Img } from "@/interface";
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

export const CardDesc = styled.span`
  color: ${color.a2};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BackButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;

export const GalleryImage = styled.img<Interface_Img>`
  margin-top: 16px;
  border-radius: 16px;
  width: 100%;

  @media all and (min-width: 1024px) {
    width: 50%;
  }
`;

export const GalleryWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GalleryTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

export const GalleryDesc = styled.div`
  text-align: justify;
  font-size: 20px;
  line-height: 28px;
  white-space: pre-line;
`;
