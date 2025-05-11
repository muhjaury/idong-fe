import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { Paragraph, Wrapper } from "./_sejarah";

function Sejarah() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.sejarah,
  ]);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.sejarah]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="Sejarah" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper>
          <Paragraph>
            &nbsp;&nbsp;&nbsp;SMKS Karya Teknik Watansoppeng adalah Sekolah
            Menengah Kejuruan (SMK) swasta yang berdiri pada tanggal 26 Oktober
            2015 di bawah naungan Yayasan Karya Teknik. Sekolah ini berlokasi di
            Jalan Kayangan, Kelurahan Lalabata Rilau, Kecamatan Lalabata,
            Kabupaten Soppeng, Sulawesi Selatan. Dengan Nomor Pokok Sekolah
            Nasional (NPSN) 40303667, SMKS Karya Teknik Watansoppeng telah
            mendapatkan izin operasional pada 2 Januari 2016 dan memperoleh
            akreditasi B pada tahun 2021.
          </Paragraph>
          <Paragraph>
            &nbsp;&nbsp;&nbsp;Sejak awal berdirinya, SMKS Karya Teknik
            Watansoppeng berkomitmen untuk menyediakan pendidikan kejuruan yang
            berkualitas, mempersiapkan siswa dengan keterampilan teknis dan
            profesional yang dibutuhkan di dunia kerja. Sekolah ini menawarkan
            berbagai program keahlian, termasuk Teknik Otomotif, Teknologi
            Konstruksi dan Properti, serta Teknik Komputer dan Informatika, yang
            dirancang untuk memenuhi kebutuhan industri lokal dan nasional.
          </Paragraph>
          <Paragraph>
            &nbsp;&nbsp;&nbsp;Dengan fasilitas yang memadai dan tenaga pengajar
            yang kompeten, SMKS Karya Teknik Watansoppeng terus berupaya
            meningkatkan mutu pendidikan dan menghasilkan lulusan yang siap
            bersaing di dunia kerja maupun melanjutkan pendidikan ke jenjang
            yang lebih tinggi.
          </Paragraph>
        </Wrapper>
      </Section>
    </CoreLayout>
  );
}

export default Sejarah;
