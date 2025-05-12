import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import { useWidget } from "@/context";
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

  const { setListFetchAPI } = useWidget();

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.strukturOrganisasi]);
  }, []);

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchStrukturOrganisasi: true };
    });

    const func = { setFile, setListFetchAPI };
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
