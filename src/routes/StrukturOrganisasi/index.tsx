import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { base64ToBlob } from "@/utils/fileManipulation";
import { useEffect, useState } from "react";
import { File } from "./_strukturOrganisasi";
import { fetch } from "./network";

function StrukturOrganisasi() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.strukturOrganisasi,
  ]);
  const [file, setFile] = useState("");

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.strukturOrganisasi]);
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
      <PageTitle title="Struktur Organisasi" breadcrumb={breadcrumb} />
      <Section type="secondary">
        {file && <File src={file} onClick={handleFileClick} />}
      </Section>
    </CoreLayout>
  );
}

export default StrukturOrganisasi;
