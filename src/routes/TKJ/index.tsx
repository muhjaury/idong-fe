import { DisplayFile, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import { useWidget } from "@/context";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { Modul, Paragraph, Wrapper } from "./_TKJ";
import { fetch } from "./network";

function TKJ() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.tkj,
  ]);
  const [list, setList] = useState([]);

  const { setListFetchAPI } = useWidget();

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchTKJ: true };
    });

    const func = { setList, setListFetchAPI };
    fetch(func);
  }, []);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.tkj]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="TKJ" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper>
          <Paragraph>
            &nbsp;&nbsp;&nbsp;Program keahlian Teknik Jaringan Komputer dan
            Telekomunikasi berkontribusi dalam membentuk peserta didik memiliki
            keahlian pada bidang Teknik Jaringan Komputer dan Telekomunikasi,
            meningkatkan lebih lanjut kemampuan logika dan teknologi digital
            (computational thinking), yaitu suatu cara berpikir yang
            memungkinkan untuk menguraikan suatu masalah menjadi beberapa bagian
            yang lebih kecil dan sederhana, menemukan pola masalah, serta
            menyusun langkah- langkah solusi mengatasi masalah. Pembelajarannya
            akan membiasakan peserta didik bernalar kritis dalam menghadapi
            permasalahan, bekerja mandiri, serta kreatif dalam mengembangkan
            solusi permasalahan di dunia usaha dan industri.
          </Paragraph>
          <br />
          <Paragraph>
            &nbsp;&nbsp;&nbsp;Pada hakikatnya mata pelajaran ini berfokus pada
            kompetensi bersifat dasar yang harus dimiliki oleh tenaga admin
            database, analis system komputer, dosen ilmu komputer, peneliti,
            perancang jaringan komputer, perancang sistem komputer dan jabatan
            lain sesuai dengan perkembangan dunia kerja. Selain itu peserta
            didik diberikan pemahaman tentang proses bisnis, perkembangan
            penerapan teknologi dan isu-isu global, entrepreneur profile, job
            profile, peluang usaha dan pekerjaan/profesi.
          </Paragraph>
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

export default TKJ;
