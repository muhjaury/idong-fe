import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { base64ToBlob } from "@/utils/fileManipulation";
import { useEffect, useState } from "react";
import { File } from "./_kalenderAkademik";
import { fetch } from "./network";

function KalenderAkademik() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.kalenderAkademik,
  ]);
  const [file, setFile] = useState("");

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.kalenderAkademik]);
  }, []);

  useEffect(() => {
    const func = { setFile };
    fetch(func);
  }, []);

  const handleFileClick = () => {
    base64ToBlob(file).then((data) => window.open(URL.createObjectURL(data)));
  };

  return (
    <CoreLayout>
      <PageTitle title="Kalender Akademik" breadcrumb={breadcrumb} />
      <Section type="secondary">
        {file && <File src={file} onClick={handleFileClick} />}
      </Section>
    </CoreLayout>
  );
}

export default KalenderAkademik;
