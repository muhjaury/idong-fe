import { color } from "@/constant/color";
import { Interface_Img } from "@/interface";
import styled from "styled-components";

export const Video = styled.video`
  border-radius: 32px;
  position: absolute;
  z-index: 4;
  top: 80px;
  left: calc((100% - 360px) / 2);
  width: 360px;
  height: 204px;
  background: ${color.a6};

  @media all and (min-width: 1024px) {
    left: calc((100% - 960px) / 2);
    width: 960px;
    height: 540px;
  }
`;

export const Content2Wrapper = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  @media all and (min-width: 1024px) {
    gap: 80px;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 480px;
  }
`;

export const Content2WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media all and (min-width: 1024px) {
    width: 33%;
  }
`;

export const Content2WrapperColumn1Label = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${color.a2};
`;

export const Content2WrapperColumn1Desc = styled.div`
  font-size: 22px;
  color: ${color.a7};
`;

export const FacilityWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

export const FacilityLogo = styled.img<Interface_Img>`
  border-radius: 16px;
  background: ${color.a5};
  min-width: 67px;
  height: 58px;
`;

export const FaciliyContentWrappper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FacilityTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: ${color.a2};
`;

export const FacilityDesc = styled.div`
  font-weight: 400;
  font-size: 22px;
  color: ${color.a7};
`;

export const WrapperGreeting = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.div`
  font-size: 20px;

  @media all and (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const SchoolName = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: 600;

  @media all and (min-width: 1024px) {
    font-size: 72px;
  }
`;

export const Content3Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 1024px) {
    align-items: start;
    gap: 56px;
    flex-direction: row;
  }
`;

export const HeadmasterPic = styled.img<Interface_Img>`
  border-radius: 16px;
  background: ${color.a5};
  min-width: 240px;
  height: 360px;

  @media all and (min-width: 1024px) {
    min-width: 424px;
    height: 520px;
  }
`;

export const HeadmasterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SubTitle = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: ${color.a2};
`;

export const HeadmasterTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${color.a2};

  @media all and (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const HeadmasterDesc = styled.div`
  text-align: justify;
  font-size: 16px;
  line-height: 20px;
  color: ${color.a7};
  white-space: pre-line;

  @media all and (min-width: 1024px) {
    font-size: 22px;
    line-height: 36px;
  }
`;

export const ProgramTitle = styled.div`
  text-align: center;
  margin-top: 40px;
  color: ${color.a2};
  font-size: 40px;
  font-weight: 600;
`;

export const ProgramWrapper = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 56px;

  @media all and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ProgramContentWrapper = styled.div`
  display: flex;
  gap: 32px;

  @media all and (min-width: 1024px) {
    width: 50%;
  }
`;

export const ProgramLogo = styled.img<Interface_Img>`
  border-radius: 16px;
  min-width: 96px;
  height: 96px;
  background: ${color.a5};
`;

export const ProgramColumn = styled.div`
  display: flex;

  flex-direction: column;
  gap: 16px;
`;

export const ProgramContentTitle = styled.div`
  color: ${color.a2};
  font-size: 24px;
`;

export const ProgramContentDesc = styled.span`
  text-align: justify;
  color: ${color.a7};
  font-size: 16px;
`;

export const SubTitleWhite = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${color.a1};
`;

export const NewsTitle = styled.div`
  text-align: center;
  margin-top: 40px;
  color: ${color.a1};
  font-size: 40px;
  font-weight: 600;
`;

export const CardWrapper = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media all and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const CardTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${color.a2};
`;

export const CardDesc = styled.span`
  color: ${color.a2};
`;
