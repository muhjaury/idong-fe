import { DisplayFile, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import { useWidget } from "@/context";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { Li, Modul, Ol, Paragraph, Wrapper } from "./_DPIB";
import { fetch } from "./network";

function DPIB() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.dpib,
  ]);
  const [list, setList] = useState([]);

  const { setListFetchAPI } = useWidget();

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchDPIB: true };
    });

    const func = { setList, setListFetchAPI };
    fetch(func);
  }, []);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.dpib]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="DPIB" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper>
          <Paragraph>
            &nbsp;&nbsp;&nbsp;Program keahlian Desain Pemodelan dan Informasi
            banguna memiliki kurikulum yang dirancang khusus untuk mempersiapkan
            siswa dalam berbagai aspek desain, pemodelan, dan informasi
            bangunan. Mata pelajaran yang dipelajari dalam program keahlian ini
            mencakup berbagai keterampilan yang diperlukan untuk sukses dalam
            industri konstruksi dan arsitektur. Berikut adalah beberapa mata
            pelajaran yang umumnya diajarkan dalam program keahlian ini:
          </Paragraph>
          <br />
          <Ol type="a">
            <Li>Desain Arsitektur</Li>
            <span>
              Mata pelajaran ini mengajarkan dasar-dasar desain arsitektur,
              termasuk prinsip-prinsip desain, estetika, dan fungsionalitas
              bangunan.
            </span>
            <Li>Pemodelan 3D</Li>
            <span>
              Siswa belajar tentang pemodelan tiga dimensi menggunakan perangkat
              lunak seperti AutoCAD, SketchUp, atau perangkat lunak pemodelan
              lainnya.
            </span>
            <Li>Pemodelan Informasi Bangunan (BIM)</Li>
            <span>
              Siswa memahami konsep dan praktik BIM, termasuk bagaimana
              mengintegrasikan informasi bangunan ke dalam proyek konstruksi.
            </span>
            <Li>Teknologi Konstruksi</Li>
            <span>
              Mata pelajaran ini mencakup pemahaman tentang teknologi
              konstruksi, bahan bangunan, dan metode konstruksi yang berbeda.
            </span>
            <Li>Dokumentasi Teknis</Li>
            <span>
              Siswa belajar tentang pembuatan dokumen teknis yang diperlukan
              dalam proyek konstruksi, seperti gambar teknis, spesifikasi, dan
              perencanaan proyek.
            </span>
            <Li>Manajemen Proyek Konstruksi</Li>
            <span>
              Mata pelajaran ini mengajarkan prinsip-prinsip dasar manajemen
              proyek konstruksi, termasuk perencanaan, pengendalian biaya, dan
              jadwal proyek.
            </span>
            <Li>Peraturan Bangunan</Li>
            <span>
              Siswa memahami peraturan dan standar bangunan yang berlaku, serta
              peran penting kepatuhan terhadap peraturan dalam proyek
              konstruksi.
            </span>
            <Li>Computer Aided Design (CAD)</Li>
            <span>
              Siswa memperoleh keterampilan dalam penggunaan perangkat lunak CAD
              untuk membuat gambar teknis dan perencanaan desain.
            </span>
            <Li>Keterampilan Komunikasi</Li>
            <span>
              Pentingnya komunikasi dalam industri ini diakui, sehingga siswa
              juga diajarkan keterampilan komunikasi baik lisan maupun tertulis.
            </span>
            <Li>Praktik Kerja</Li>
            <span>
              Sebagian besar program SMK melibatkan praktik kerja di lapangan,
              di mana siswa dapat mengaplikasikan pengetahuan dan keterampilan
              yang mereka pelajari dalam situasi nyata di tempat kerja. Mata
              pelajaran ini membantu siswa mengembangkan kemampuan yang luas
              dalam desain, pemodelan, dan manajemen informasi bangunan,
              mempersiapkan mereka untuk berbagai karier yang terkait dengan
              industri konstruksi dan arsitektur setelah lulus.
            </span>
          </Ol>
          <br />
          {list.length > 0 && (
            <>
              <Modul>Modul Pembelajaran</Modul>
              {list.map((item: any, index: number) => {
                return (
                  <DisplayFile
                    key={index}
                    base64={item.file}
                    label={item.deskripsi}
                  />
                );
              })}
            </>
          )}
        </Wrapper>
      </Section>
    </CoreLayout>
  );
}

export default DPIB;
