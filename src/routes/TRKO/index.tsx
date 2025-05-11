import { DisplayFile, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { Modul, Ol, Paragraph, Wrapper } from "./_TRKO";
import { fetch } from "./network";

function TRKO() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.trko,
  ]);
  const [list, setList] = useState([]);

  useEffect(() => {
    const func = { setList };
    fetch(func);
  }, []);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.trko]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="TRKO" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper>
          <Paragraph>
            &nbsp;&nbsp;&nbsp;Program keahlian otomotif adalah program Penilaian
            hasil belajar berdasarkan kurikulum tidak lepas dari proses
            pembelajaran. Oleh karena itu bila akan mengembangkan perangkat
            penilaian, maka perlu dibahas terlebih dahulu karakteristik
            pembelajarannya. Dalam pelaksanaan pembelajaran meliputi beberapa
            kegiatan pembelajaran diantaranyapembelajaran teori, pembelajaran
            praktek. Pada awal pembelajaran peserta didik dikenalkan pada
            lapangan kerja, peluang usaha, peluang karir dan profesi-profesi
            didunia kerja setelah lulus dari konsentrasi keahliannya yang telah
            dipelajari di kelas X untuk menumbuhkan passion (motivasi), vision
            (visi), imajinasi, dan kreativitas melalui :
          </Paragraph>
          <br />
          <Ol type="a">
            <li>Pembelajaran dikelas</li>
            <li>Pembelajaran di bengkel</li>
            <li>
              Kegiatan berbasis projek sederhana dengan praktik dasar pekerjaan
              dasar teknik otomotifatau dasar-dasar teknik otomotif
            </li>
            <li>
              Interaksi dengan alumnus atau praktisi industri dan guru tamu
            </li>
            <li>Berkunjung ke industri yang relevan</li>
            <li>Pencarian informasi melalui media digital</li>
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

export default TRKO;
