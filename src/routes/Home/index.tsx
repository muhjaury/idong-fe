"use client";

import { Card, Section } from "@/components";
import { urls } from "@/constant/path";
import { useWidget } from "@/context";
import CoreLayout from "@/layout/CoreLayout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "swiper/css";
import {
  CardDesc,
  CardTitle,
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
import { fetchBerita, fetchKepalaSekolah } from "./network";
import ICON1 from "./../../assets/img/icon1.png";
import ICON2 from "./../../assets/img/icon2.png";
import ICON3 from "./../../assets/img/icon3.png";
import ATPH from "./../../assets/img/ATPH.png";
import TSM from "./../../assets/img/TSM.png";
import TKR from "./../../assets/img/TKR.png";
import DPIB from "./../../assets/img/DPIB.png";
import TKJ from "./../../assets/img/TKJ.png";

function Home() {
  const [namaKepsek, setNamaKepsek] = useState("");
  const [sambutanKepsek, setSambutanKepsek] = useState("");
  const [fotoKepsek, setFotoKepsek] = useState("");
  const [berita, setBerita] = useState<any>([]);

  const { setListFetchAPI, setLoading } = useWidget();
  const router = useRouter();

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchKepalaSekolah: true };
    });
    const func = {
      setNamaKepsek,
      setSambutanKepsek,
      setFotoKepsek,
      setListFetchAPI,
    };
    fetchKepalaSekolah(func);
  }, []);

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchBerita: true };
    });
    const func = { setBerita, setListFetchAPI };
    fetchBerita(func);
  }, []);

  const handleBeritaClick = (idx: number) => {
    setLoading(true);
    router.push(urls.PORTAL_BERITA + `?i=${idx}`);
  };

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
          src="/SMKS-KARYA-TEKNIK.mp4"
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
              <FacilityLogo src={ICON3} />
              <FaciliyContentWrappper>
                <FacilityTitle>Fasilitas Lengkap</FacilityTitle>
                <FacilityDesc>
                  Penunjang belajar dengan kualitas premium.
                </FacilityDesc>
              </FaciliyContentWrappper>
            </FacilityWrapper>
            <FacilityWrapper>
              <FacilityLogo src={ICON2} />
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
              <FacilityLogo src={ICON1} />
              <FaciliyContentWrappper>
                <FacilityTitle>Pengajar Kompeten</FacilityTitle>
                <FacilityDesc>
                  Guru yang up-to-date dengan perkembangan industri.
                </FacilityDesc>
              </FaciliyContentWrappper>
            </FacilityWrapper>
          </Content2WrapperColumn>
        </Content2Wrapper>
      </Section>
      <Section type="secondary">
        <Content3Wrapper>
          <HeadmasterWrapper>
            {fotoKepsek ? (
              <HeadmasterPic src={fotoKepsek} />
            ) : (
              <HeadmasterPic />
            )}
            <SubTitle>{namaKepsek ? namaKepsek : <Skeleton />}</SubTitle>
          </HeadmasterWrapper>
          <HeadmasterWrapper>
            <SubTitle>SAMBUTAN KEPALA SEKOLAH</SubTitle>
            <HeadmasterTitle>
              Selamat Datang Untukmu Para Pejuang Bangsa
            </HeadmasterTitle>
            <HeadmasterDesc>
              {sambutanKepsek ? sambutanKepsek : <Skeleton count={10} />}
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
            <ProgramLogo src={TKJ} />
            <ProgramColumn>
              <ProgramContentTitle>TKJ</ProgramContentTitle>
              <ProgramContentDesc>
                Jurusan TKJ (Teknik Komputer dan Jaringan) adalah
                programkeahlian di SMK yang mempelajari cara merakit,
                menginstal,mengelola, dan memperbaiki perangkat komputer serta
                membangundan mengelola jaringan komputer, baik lokal (LAN)
                maupun internet. Siswa juga diajarkan tentang keamanan jaringan,
                system operasi, perangkat keras, serta dasar-dasar pemrograman
                dan layanan jaringan seperti server dan hosting. Jurusan ini
                cocokbagi siswa yang tertarik pada dunia teknologi informasi dan
                memiliki peluang kerja luas di bidang IT, seperti menjadi
                teknisi jaringan, administrator server, atau teknisi komputer.
              </ProgramContentDesc>
            </ProgramColumn>
          </ProgramContentWrapper>
          <ProgramContentWrapper>
            <ProgramLogo src={DPIB} />
            <ProgramColumn>
              <ProgramContentTitle>DPIB</ProgramContentTitle>
              <ProgramContentDesc>
                Jurusan DPIB (Desain Pemodelan dan Informasi Bangunan) adalah
                program keahlian di SMK yang mempelajari perencanaan, desain,
                dan penggambaran bangunan, baik secara manual maupun menggunakan
                perangkat lunak seperti AutoCAD dan SketchUp. Siswa dibekali
                keterampilan dalam membuat gambar teknik bangunan, menghitung
                kebutuhan material dan biaya konstruksi, serta memahami proses
                pembangunan dari awal hingga selesai. Jurusan ini cocok bagi
                siswa yang tertarik pada dunia arsitektur, konstruksi, dan
                teknik sipil, dengan peluang kerja di bidang perencanaan
                bangunan, pengawasan proyek, maupun konsultan teknik.
              </ProgramContentDesc>
            </ProgramColumn>
          </ProgramContentWrapper>
        </ProgramWrapper>
        <ProgramWrapper>
          <ProgramContentWrapper>
            <ProgramLogo src={TSM} />
            <ProgramColumn>
              <ProgramContentTitle>TSM</ProgramContentTitle>
              <ProgramContentDesc>
                Jurusan TSM (Teknik Sepeda Motor) adalah program keahlian di SMK
                yang mempelajari cara merawat, memperbaiki, dan menganalisis
                kerusakan sepeda motor, baik dari segi mesin, kelistrikan,
                maupun sistem injeksi. Selain keterampilan teknis, siswa juga
                dibekali dengan pengetahuan bisnis dan manajemen bengkel,
                sehingga mampu bekerja di bengkel resmi, pabrik otomotif, atau
                membuka usaha sendiri. Jurusan ini cocok bagi siswa yang
                tertarik pada dunia otomotif dan ingin langsung terjun ke dunia
                kerja atau wirausaha setelah lulus.
              </ProgramContentDesc>
            </ProgramColumn>
          </ProgramContentWrapper>
          <ProgramContentWrapper>
            <ProgramLogo src={TKR} />
            <ProgramColumn>
              <ProgramContentTitle>TKR</ProgramContentTitle>
              <ProgramContentDesc>
                Jurusan TKR (Teknik Kendaraan Ringan) adalah program keahlian di
                SMK yang mempelajari tentang perencanaan, pelaksanaan, dan
                pengawasan proyek konstruksi bangunan, seperti rumah, gedung,
                dan infrastruktur lainnya. Siswa dibekali dengan keterampilan
                menggambar teknik, menghitung struktur dan anggaran biaya,
                memahami bahan bangunan, serta menggunakan alat ukur dan
                perangkat lunak konstruksi. Jurusan ini cocok bagi siswa yang
                tertarik pada dunia teknik sipil dan konstruksi, serta memiliki
                peluang kerja sebagai drafter, teknisi konstruksi, estimator
                proyek, atau melanjutkan pendidikan ke jenjang teknik sipil atau
                arsitektur.
              </ProgramContentDesc>
            </ProgramColumn>
          </ProgramContentWrapper>
        </ProgramWrapper>
        <ProgramWrapper>
          <ProgramContentWrapper>
            <ProgramLogo src={ATPH} />
            <ProgramColumn>
              <ProgramContentTitle>ATPH</ProgramContentTitle>
              <ProgramContentDesc>
                Jurusan ATPH (Agribisnis Tanaman Pangan dan Hortikultura) adalah
                program keahlian di SMK yang mempelajari cara budidaya tanaman
                pangan seperti padi, jagung, serta tanaman hortikultura seperti
                sayuran, buah, dan tanaman hias, mulai dari penanaman,
                perawatan, panen, hingga pemasaran hasil pertanian. Siswa juga
                dibekali dengan pengetahuan tentang penggunaan alat dan
                teknologipertanian, pengendalian hama, serta kewirausahaan di
                bidang agribisnis. Jurusan ini cocok bagi siswa yang tertarik
                pada pertanian modern dan ingin bekerja atau berwirausaha di
                sektor pertanian yang berkelanjutan.
              </ProgramContentDesc>
            </ProgramColumn>
          </ProgramContentWrapper>
        </ProgramWrapper>
      </Section>
      {berita.length > 0 && (
        <Section>
          <SubTitleWhite>BERITA TERKINI</SubTitleWhite>
          <NewsTitle>
            Berita terkini dari SMKS Karya Teknik Watangsoppeng
          </NewsTitle>
          <CardWrapper>
            {berita.length > 0 &&
              berita.map((item: any, index: number) => {
                return (
                  <Card
                    key={index}
                    image={item.foto}
                    contentBottom={
                      <>
                        <CardTitle>{item.judul}</CardTitle>
                        <CardDesc title={item.deskripsi}>
                          {item.deskripsi}
                        </CardDesc>
                      </>
                    }
                    onClick={() => handleBeritaClick(index)}
                  />
                );
              })}
          </CardWrapper>
        </Section>
      )}
    </CoreLayout>
  );
}

export default Home;
