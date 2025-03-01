"use client";

import { Button, Content, Section } from "@/components";
import CoreLayout from "@/layout/CoreLayout";
import {
  Content2Icon,
  Content2Label,
  Content2SubWrapper,
  Content2SubWrapperFlex,
  Content2Title,
  Content2Wrapper,
  Content3LeftWrapper,
  Content3RightWrapper,
  Content3Wrapper,
  Content4Title,
  Content4Wrapper,
  HeadMasterDetailWrapper,
  HeadMasterName,
  HeadMasterPhoto,
  HeadMasterTitle,
  MajorDesc,
  MajorDescWrapper,
  MajorLabel,
  MajorPhoto,
  MajorWrapper,
  Video,
  WelcomeDescription,
  WelcomeTitle,
} from "./_home";

function Home() {
  return (
    <CoreLayout>
      <Section>
        <Video
          src="/WaitingForTheEnd-LP.mp4"
          autoPlay
          preload="none"
          muted
          loop
        />
      </Section>
      <Section type="secondary">
        <Content2Wrapper>
          <Content2Title>SMK Bisa</Content2Title>
          <Content2SubWrapper>
            <Content2SubWrapperFlex>
              <Content2Icon />
              <Content2Label>Fasilitas Lengkap</Content2Label>
            </Content2SubWrapperFlex>
            <Content2SubWrapperFlex>
              <Content2Icon />
              <Content2Label>Pengajar Kompeten</Content2Label>
            </Content2SubWrapperFlex>
          </Content2SubWrapper>
          <Content2SubWrapper>
            <Content2SubWrapperFlex>
              <Content2Icon />
              <Content2Label>Lingkungan Nyaman</Content2Label>
            </Content2SubWrapperFlex>
          </Content2SubWrapper>
        </Content2Wrapper>
      </Section>
      <Section>
        <Content3Wrapper>
          <Content3LeftWrapper>
            <HeadMasterPhoto />
            <HeadMasterDetailWrapper>
              <HeadMasterName>Nama Kepsek</HeadMasterName>
              <HeadMasterTitle>Kepala Sekolah Blablabla</HeadMasterTitle>
            </HeadMasterDetailWrapper>
          </Content3LeftWrapper>
          <Content3RightWrapper>
            <WelcomeTitle>Sambutan Kepala Sekolah</WelcomeTitle>
            <WelcomeDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </WelcomeDescription>
          </Content3RightWrapper>
        </Content3Wrapper>
      </Section>
      <Section type="secondary">
        <Content4Title>
          Jurusan Yang Tersedia di SMKS Karya Teknik Watangsoppeng
        </Content4Title>
        <Content4Wrapper>
          <MajorWrapper>
            <MajorPhoto />
            <MajorDescWrapper>
              <MajorLabel>List Item</MajorLabel>
              <MajorDesc>jodjsa; lcma; slcmaodakllndadnanc</MajorDesc>
              <MajorDesc>jodjsa; lcma; slcmaodakllndadnanc</MajorDesc>
            </MajorDescWrapper>
          </MajorWrapper>
          <MajorWrapper>
            <MajorPhoto />
            <MajorDescWrapper>
              <MajorLabel>List Item</MajorLabel>
              <MajorDesc>jodjsa; lcma; slcmaodakllndadnanc</MajorDesc>
              <MajorDesc>jodjsa; lcma; slcmaodakllndadnanc</MajorDesc>
            </MajorDescWrapper>
          </MajorWrapper>
          <MajorWrapper>
            <MajorPhoto />
            <MajorDescWrapper>
              <MajorLabel>List Item</MajorLabel>
              <MajorDesc>jodjsa; lcma; slcmaodakllndadnanc</MajorDesc>
              <MajorDesc>jodjsa; lcma; slcmaodakllndadnanc</MajorDesc>
            </MajorDescWrapper>
          </MajorWrapper>
          <MajorWrapper>
            <MajorPhoto />
            <MajorDescWrapper>
              <MajorLabel>List Item</MajorLabel>
              <MajorDesc>jodjsa; lcma; slcmaodakllndadnanc</MajorDesc>
              <MajorDesc>jodjsa; lcma; slcmaodakllndadnanc</MajorDesc>
            </MajorDescWrapper>
          </MajorWrapper>
          <MajorWrapper>
            <MajorPhoto />
            <MajorDescWrapper>
              <MajorLabel>List Item</MajorLabel>
              <MajorDesc>jodjsa; lcma; slcmaodakllndadnanc</MajorDesc>
              <MajorDesc>jodjsa; lcma; slcmaodakllndadnanc</MajorDesc>
            </MajorDescWrapper>
          </MajorWrapper>
        </Content4Wrapper>
      </Section>
      <Section></Section>
    </CoreLayout>
  );
}

export default Home;
