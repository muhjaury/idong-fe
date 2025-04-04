import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";

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
      <Section type="secondary">SMKS Karya Teknik Watansoppeng didirikan tanggal 5 juli 1969 
      di atas lahan seluas 12.239 m 2 dengan Nomor SK pendirian 120/UK.3/1969 dengan 
      nama SMKS Karya Teknik Watansoppeng. Sekolah ini merupakan sekolah menengah kejuruan 
      tertua di kabupaten Soppeng yang sekarang ini bernama SMKS Karya Teknik Watansoppeng, 
      NPSS 40304501, berakreditasi A. SMKS Karya Teknik Watansoppen berlokasi di jalan tekukur No. 
      1 Sinjai kelurahan biringere, kecamatan sinjai utara yang dikelilingi oleh 
      empat jalan yaitu di sebelah Barat Jalan Tekukur, di sebelah utara Jalan Teuku Umar, 
      sebelah timur Jalan Wolter Monginsidi, dan di sebelah selatan Jalan Tamrin.</Section>
    </CoreLayout>
  );
}

export default Sejarah;
