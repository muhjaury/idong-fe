import { Button, FieldWrapper, InputText, TextArea } from "@/components";
import FileUpload from "@/components/FileUpload";
import { useEffect, useState } from "react";
import { ButtonWrapper, PromptText, Wrapper } from "./_tambahProfilSekolah";
import { saveData } from "./network";

function TambahProfilSekolah(props: any) {
  const [principleName, setPrincipleName] = useState("");
  const [principleFile, setPrincipleFile] = useState([]);
  const [principleGreeting, setPrincipleGreeting] = useState("");
  const [visionMissionFile, setVisionMissionFile] = useState([]);
  const [orgStructureFile, setOrgStructureFile] = useState([]);
  const [academicCalenderFile, setAcademicCalenderFile] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
      const data = {
        principleName,
        principleFile,
        principleGreeting,
        visionMissionFile,
        orgStructureFile,
        academicCalenderFile,
      };
      const func = {
        setPrincipleName,
        setPrincipleFile,
        setPrincipleGreeting,
        setVisionMissionFile,
        setOrgStructureFile,
        setAcademicCalenderFile,
        setError,
        setSuccess,
      };
      saveData(func, data);
    } else {
      setError("Semua data harus diisi");
    }
  };

  return (
    <Wrapper>
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
        />
      </FieldWrapper>
      <FieldWrapper>
        <FileUpload
          label="Struktur Organisasi"
          value={orgStructureFile}
          onChange={(data) => setOrgStructureFile(data)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <FileUpload
          label="Kalender Akademik"
          value={academicCalenderFile}
          onChange={(data) => setAcademicCalenderFile(data)}
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
