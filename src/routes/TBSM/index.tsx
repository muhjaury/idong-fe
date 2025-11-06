import { DisplayFile, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import { useWidget } from "@/context";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { Modul, Ol, Paragraph, Wrapper } from "./_TBSM";
import { fetch } from "./network";

function TBSM() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.tbsm,
  ]);
  const [list, setList] = useState([]);

  const { setListFetchAPI } = useWidget();

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchTBSM: true };
    });

    const func = { setList, setListFetchAPI };
    fetch(func);
  }, []);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.tbsm]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="TSM" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper>
          <Paragraph>
            &nbsp;&nbsp;&nbsp;Jurusan Teknik Sepeda Motor (TSM) merupakan salah
            satu program keahlian di bidang Teknik Otomotif yang mempelajari
            secara mendalam tentang teknologi sepeda motor, baik dari sisi
            teknis (servis dan perawatan) maupun sisi bisnis (manajemen dan
            kewirausahaan bengkel motor).
          </Paragraph>
          <Paragraph>
            &nbsp;&nbsp;&nbsp;Jurusan ini bertujuan untuk mencetak lulusan yang
            terampil secara teknis, siap kerja, serta mampu berwirausaha di
            bidang otomotif, khususnya sepeda motor. Sekolah-sekolah dengan
            jurusan TBSM sering bermitra dengan perusahaan otomotif besar.
            Beberapa kompetensi dasar yang diajarkan di jurusan TBSM, antara
            lain:
          </Paragraph>
          <br />
          <Ol type="a">
            <li>Pemeliharaan Mesin Sepeda Motor</li>
            <li>Pemeliharaan Sistem Kelistrikan</li>
            <li>Pemeliharaan Chassis dan Suspensi</li>
            <li>Gambar Teknik dan Dasar Listrik</li>
            <li>Teknologi Sepeda Motor Injeksi</li>
            <li>Keselamatan Kerja dan Ergonomi</li>
            <li>Manajemen Bengkel dan Administrasi Servis</li>
            <li>Kewirausahaan dan Etika Profesi</li>
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

export default TBSM;
