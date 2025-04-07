import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { base64ToBlob } from "@/utils/fileManipulation";
import { useEffect, useState } from "react";
import { File } from "./_visiMisi";
import { fetch } from "./network";

function VisiMisi() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.visiMisi,
  ]);
  const [file, setFile] = useState("");

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.visiMisi]);
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
      <PageTitle title="Visi - Misi" breadcrumb={breadcrumb} />
      <Section type="secondary">
        {file && <File src={file} onClick={handleFileClick} />}
      </Section>
    </CoreLayout>
  );
}

export default VisiMisi;
