import { Interface_Img } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 24px;
`;

export const Maps = styled.img<Interface_Img>`
  height: 400px;
  width: 100%;
  border-radius: 40px;
  background: grey;
  object-fit: cover;
`;

export const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media all and (min-width: 768px) {
    gap: 8px;
  }
`;

export const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media all and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
  }
`;

export const DetailTitle = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 600;

  @media all and (min-width: 768px) {
    width: 240px;
  }
`;

export const DetailValue = styled.div`
  font-size: 24px;
`;
