import { DisplayFile, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import { useWidget } from "@/context";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { Modul, Ol, Paragraph, Wrapper } from "./_ATPH";
import { fetch } from "./network";

function ATPH() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.atph,
  ]);
  const [list, setList] = useState([]);

  const { setListFetchAPI } = useWidget();

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchATPH: true };
    });
    const func = { setList, setListFetchAPI };
    fetch(func);
  }, []);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.atph]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="ATPH" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper>
          <Paragraph>
            &nbsp;&nbsp;&nbsp;ATPH adalah singkatan dari Agribisnis Tanaman
            Pangan dan Hortikultura. Jurusan ini mempelajari tentang budidaya
            tanaman pangan (seperti padi, jagung, kedelai) dan tanaman
            hortikultura (seperti sayuran, buah-buahan, dan tanaman hias), serta
            aspek bisnis dan pemasaran hasil pertanian.
          </Paragraph>
          <Paragraph>
            &nbsp;&nbsp;&nbsp;Tujuan utama jurusan ini adalah untuk membekali
            siswa dengan keterampilan teknis dan manajerial agar bisa bekerja di
            sektor pertanian modern, baik sebagai pekerja profesional maupun
            sebagai wirausahawan. Lulusan a ATPH bisa bekerja di berbagai
            bidang, petani modern atau wirausahawan pertanian, teknisi pertanian
            (di perusahaan atau dinas pertanian), pengusaha bibit tanaman atau
            pupuk, pengelola greenhouse atau kebun hortikultura, karyawan di
            perusahaan benih, pupuk, atau pestisida, staf agribisnis atau
            distributor hasil pertanian. Beberapa mata pelajaran kejuruan dalam
            ATPH:
          </Paragraph>
          <br />
          <Ol type="a">
            <li>Dasar-Dasar Agribisnis</li>
            <li>Budidaya Tanaman Pangan</li>
            <li>BudidayaTanaman Hortikultura</li>
            <li>Alat dan Mesin Pertanian (Alsintan)</li>
            <li>Pengolahan Hasil Pertanian</li>
            <li>Pengendalian Hama dan Penyakit</li>
            <li>Manajemen Usaha Tani</li>
            <li>Pemasaran dan Kewirausahaan Pertanian</li>
            <li>Teknik Irigasi dan Pemupukan</li>
            <li>Teknologi Tepat Guna di Bidang Pertanian</li>
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

export default ATPH;
