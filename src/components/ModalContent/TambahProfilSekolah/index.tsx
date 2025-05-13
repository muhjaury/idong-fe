import { Button, FieldWrapper, InputText, TextArea } from "@/components";
import FileUpload from "@/components/FileUpload";
import { useWidget } from "@/context";
import { decryptData } from "@/utils/dataManipulation";
import { generateOneFileDataFromBase64 } from "@/utils/fileManipulation";
import { useEffect, useState } from "react";
import {
  ButtonWrapper,
  PromptText,
  Title,
  Wrapper,
} from "./_tambahProfilSekolah";
import { saveData } from "./network";

function TambahProfilSekolah(props: any) {
  const [id, setId] = useState("");
  const [principleName, setPrincipleName] = useState("");
  const [principleFile, setPrincipleFile] = useState<any>([]);
  const [principleGreeting, setPrincipleGreeting] = useState("");
  const [visionMissionFile, setVisionMissionFile] = useState<any>([]);
  const [orgStructureFile, setOrgStructureFile] = useState<any>([]);
  const [academicCalenderFile, setAcademicCalenderFile] = useState<any>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { setLoading } = useWidget();

  //Prefill
  useEffect(() => {
    const data = props?.data;
    if (
      data?.principleName &&
      data?.principleFile &&
      data?.principleGreeting &&
      data?.visionMissionFile &&
      data?.orgStructureFile &&
      data?.academicCalenderFile
    ) {
      if (data?.id) {
        setId(data?.id);
      }
      setPrincipleName(decryptData(data.principleName));
      generateOneFileDataFromBase64({
        fileName: "File_Foto_Kepala_Sekolah",
        base64: data?.principleFile,
        setData: setPrincipleFile,
      });
      setPrincipleGreeting(decryptData(data.principleGreeting));
      generateOneFileDataFromBase64({
        fileName: "File_Visi_Misi",
        base64: data?.visionMissionFile,
        setData: setVisionMissionFile,
      });
      generateOneFileDataFromBase64({
        fileName: "File_Struktur_Organisasi",
        base64: data?.orgStructureFile,
        setData: setOrgStructureFile,
      });
      generateOneFileDataFromBase64({
        fileName: "File_Kalender_Akademik",
        base64: data?.academicCalenderFile,
        setData: setAcademicCalenderFile,
      });
    }
  }, [props?.data]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
  }, [success]);

  const handlePrincipleNameChange = (e: any) => {
    setPrincipleName(e.target.value);
  };

  const handleGreetingChange = (e: any) => {
    setPrincipleGreeting(e.target.value);
  };

  const handleAddClick = () => {
    if (
      principleName &&
      principleFile.length > 0 &&
      principleGreeting &&
      visionMissionFile.length > 0 &&
      orgStructureFile.length > 0 &&
      academicCalenderFile.length > 0
    ) {
      setLoading(true);

      const data = {
        id,
        principleName,
        principleFile,
        principleGreeting,
        visionMissionFile,
        orgStructureFile,
        academicCalenderFile,
      };
      const func = {
        setId,
        setPrincipleName,
        setPrincipleFile,
        setPrincipleGreeting,
        setVisionMissionFile,
        setOrgStructureFile,
        setAcademicCalenderFile,
        setError,
        setSuccess,
        onClose: props.onClose,
        setLoading,
      };
      saveData(func, data);
    } else {
      setError("Semua data harus diisi");
    }
  };

  return (
    <Wrapper>
      <Title>{id ? "Ubah Data" : "Tambah Data"}</Title>
      <FieldWrapper>
        <InputText
          label="Nama Kepala Sekolah"
          value={principleName}
          onChange={(e) => handlePrincipleNameChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <FileUpload
          label="Foto Kepala Sekolah"
          value={principleFile}
          onChange={(data) => setPrincipleFile(data)}
          accept="img"
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextArea
          label="Sambutan"
          value={principleGreeting}
          onChange={(e) => handleGreetingChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <FileUpload
          label="Visi-Misi"
          value={visionMissionFile}
          onChange={(data) => setVisionMissionFile(data)}
          accept="img"
        />
      </FieldWrapper>
      <FieldWrapper>
        <FileUpload
          label="Struktur Organisasi"
          value={orgStructureFile}
          onChange={(data) => setOrgStructureFile(data)}
          accept="img"
        />
      </FieldWrapper>
      <FieldWrapper>
        <FileUpload
          label="Kalender Akademik"
          value={academicCalenderFile}
          onChange={(data) => setAcademicCalenderFile(data)}
          accept="pdf"
        />
      </FieldWrapper>
      <PromptText iserror={error}>{error || success}</PromptText>
      <ButtonWrapper>
        <Button removeshadow="Y" onClick={() => props.onClose()}>
          Batal
        </Button>
        <Button removeshadow="Y" onClick={() => handleAddClick()}>
          Simpan
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default TambahProfilSekolah;
