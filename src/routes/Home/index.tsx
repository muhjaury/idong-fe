"use client";

import { Card, Section } from "@/components";
import CoreLayout from "@/layout/CoreLayout";
import "swiper/css";
import {
  CardWrapper,
  Content2Wrapper,
  Content2WrapperColumn,
  Content2WrapperColumn1Desc,
  Content2WrapperColumn1Label,
  Content3Wrapper,
  FacilityDesc,
  FacilityLogo,
  FacilityTitle,
  FacilityWrapper,
  FaciliyContentWrappper,
  HeadmasterDesc,
  HeadmasterPic,
  HeadmasterTitle,
  HeadmasterWrapper,
  NewsTitle,
  ProgramColumn,
  ProgramContentDesc,
  ProgramContentTitle,
  ProgramContentWrapper,
  ProgramLogo,
  ProgramTitle,
  ProgramWrapper,
  SchoolName,
  SubTitle,
  SubTitleWhite,
  Video,
  WelcomeText,
  WrapperGreeting,
} from "./_home";

function Home() {
  return (
    <CoreLayout>
      <Section>
        <WrapperGreeting>
          <WelcomeText>Welcome</WelcomeText>
          <SchoolName>
            SMKS KARYA TEKNIK
            <br />
            WATANGSOPPENG
          </SchoolName>
        </WrapperGreeting>
      </Section>
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
          <Content2WrapperColumn>
            <Content2WrapperColumn1Label>
              Kenapa Harus SMK Karya Teknik Watangsoppeng?
            </Content2WrapperColumn1Label>
            <Content2WrapperColumn1Desc>
              Alasan kenapa kalian harus memilih untuk bergabung dengan SMK
              Karya Teknik Watangsoppeng?
            </Content2WrapperColumn1Desc>
          </Content2WrapperColumn>
          <Content2WrapperColumn>
            <FacilityWrapper>
              <FacilityLogo />
              <FaciliyContentWrappper>
                <FacilityTitle>Pengajar Kompeten</FacilityTitle>
                <FacilityDesc>
                  Guru yang up-to-date dengan perkembangan industri.
                </FacilityDesc>
              </FaciliyContentWrappper>
            </FacilityWrapper>
            <FacilityWrapper>
              <FacilityLogo />
              <FaciliyContentWrappper>
                <FacilityTitle>Lingkungan Nyaman</FacilityTitle>
                <FacilityDesc>
                  Berada di lingkungan yang asri, aman, dan kondusif.
                </FacilityDesc>
              </FaciliyContentWrappper>
            </FacilityWrapper>
          </Content2WrapperColumn>
          <Content2WrapperColumn>
            <FacilityWrapper>
              <FacilityLogo />
              <FaciliyContentWrappper>
                <FacilityTitle>Fasilitas Lengkap</FacilityTitle>
                <FacilityDesc>
                  Penunjang belajar dengan kualitas premium.
                </FacilityDesc>
              </FaciliyContentWrappper>
            </FacilityWrapper>
          </Content2WrapperColumn>
        </Content2Wrapper>
      </Section>
      <Section type="secondary">
        <Content3Wrapper>
          <HeadmasterPic />
          <HeadmasterWrapper>
            <SubTitle>SAMBUTAN KEPALA SEKOLAH</SubTitle>
            <HeadmasterTitle>
              Selamat Datang Untukmu Para Pejuang Bangsa
            </HeadmasterTitle>
            <HeadmasterDesc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
              imperdiet sem, ac accumsan massa. Sed condimentum, nibh vel semper
              accumsan, magna tellus tincidunt massa, et egestas velit nibh ac
              ex. Ut neque nisl, posuere ut ante ac, vehicula porta mi. Vivamus
              congue neque nisl, sit amet venenatis nibh dictum ut. Nulla cursus
              justo sapien, ac auctor urna iaculis non. Suspendisse sagittis
              nulla felis, sit amet tempus tellus scelerisque vitae. Phasellus
              non sapien ut dolor pharetra hendrerit. Curabitur sed laoreet
              neque, nec blandit eros. Sed ultricies a nisl sed elementum.
              Aliquam aliquet erat ut iaculis pharetra. Sed tincidunt sapien at
              tortor tempus, id sagittis eros vulputate.
            </HeadmasterDesc>
          </HeadmasterWrapper>
        </Content3Wrapper>
      </Section>
      <Section type="tertiary">
        <SubTitle>PROGRAM KEAHLIAN</SubTitle>
        <ProgramTitle>
          Jurusan Yang Tersedia di SMKS Karya Teknik Watangsoppeng
        </ProgramTitle>
        <ProgramWrapper>
          <ProgramContentWrapper>
            <ProgramLogo />
            <ProgramColumn>
              <ProgramContentTitle>TKJ</ProgramContentTitle>
              <ProgramContentDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
                imperdiet sem, ac accumsan massa. Sed condimentum, nibh vel
                semper accumsan, magna tellus tincidunt massa, et egestas velit
                nibh ac ex. Ut neque nisl, posuere ut ante ac, vehicula porta
                mi. Vivamus congue neque nisl, sit amet venenatis nibh dictum
                ut. Nulla cursus justo sapien, ac auctor urna iaculis non.
                Suspendisse sagittis nulla felis, sit .
              </ProgramContentDesc>
            </ProgramColumn>
          </ProgramContentWrapper>
          <ProgramContentWrapper>
            <ProgramLogo />
            <ProgramColumn>
              <ProgramContentTitle>DPIB</ProgramContentTitle>
              <ProgramContentDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
                imperdiet sem, ac accumsan massa. Sed condimentum, nibh vel
                semper accumsan, magna tellus tincidunt massa, et egestas velit
                nibh ac ex. Ut neque nisl, posuere ut ante ac, vehicula porta
                mi. Vivamus congue neque nisl, sit amet venenatis nibh dictum
                ut. Nulla cursus justo sapien, ac auctor urna iaculis non.
                Suspendisse sagittis nulla felis, sit .
              </ProgramContentDesc>
            </ProgramColumn>
          </ProgramContentWrapper>
        </ProgramWrapper>
        <ProgramWrapper>
          <ProgramContentWrapper>
            <ProgramLogo />
            <ProgramColumn>
              <ProgramContentTitle>TBSM</ProgramContentTitle>
              <ProgramContentDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
                imperdiet sem, ac accumsan massa. Sed condimentum, nibh vel
                semper accumsan, magna tellus tincidunt massa, et egestas velit
                nibh ac ex. Ut neque nisl, posuere ut ante ac, vehicula porta
                mi. Vivamus congue neque nisl, sit amet venenatis nibh dictum
                ut. Nulla cursus justo sapien, ac auctor urna iaculis non.
                Suspendisse sagittis nulla felis, sit .
              </ProgramContentDesc>
            </ProgramColumn>
          </ProgramContentWrapper>
          <ProgramContentWrapper>
            <ProgramLogo />
            <ProgramColumn>
              <ProgramContentTitle>TRKO</ProgramContentTitle>
              <ProgramContentDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
                imperdiet sem, ac accumsan massa. Sed condimentum, nibh vel
                semper accumsan, magna tellus tincidunt massa, et egestas velit
                nibh ac ex. Ut neque nisl, posuere ut ante ac, vehicula porta
                mi. Vivamus congue neque nisl, sit amet venenatis nibh dictum
                ut. Nulla cursus justo sapien, ac auctor urna iaculis non.
                Suspendisse sagittis nulla felis, sit .
              </ProgramContentDesc>
            </ProgramColumn>
          </ProgramContentWrapper>
        </ProgramWrapper>
        <ProgramWrapper>
          <ProgramContentWrapper>
            <ProgramLogo />
            <ProgramColumn>
              <ProgramContentTitle>ATPH</ProgramContentTitle>
              <ProgramContentDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
                imperdiet sem, ac accumsan massa. Sed condimentum, nibh vel
                semper accumsan, magna tellus tincidunt massa, et egestas velit
                nibh ac ex. Ut neque nisl, posuere ut ante ac, vehicula porta
                mi. Vivamus congue neque nisl, sit amet venenatis nibh dictum
                ut. Nulla cursus justo sapien, ac auctor urna iaculis non.
                Suspendisse sagittis nulla felis, sit .
              </ProgramContentDesc>
            </ProgramColumn>
          </ProgramContentWrapper>
        </ProgramWrapper>
      </Section>
      <Section>
        <SubTitleWhite>BERITA TERKINI</SubTitleWhite>
        <NewsTitle>
          Berita terkini dari SMKS Karya Teknik Watangsoppeng
        </NewsTitle>
        <CardWrapper>
          <Card />
          <Card />
          <Card />
        </CardWrapper>
      </Section>
    </CoreLayout>
  );
}

export default Home;
