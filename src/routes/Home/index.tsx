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
  Video,
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
      <Section></Section>
      <Section type="secondary"></Section>
    </CoreLayout>
  );
}

export default Home;
