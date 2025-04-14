import { Button, FieldWrapper, InputText } from "@/components";
import FileUpload from "@/components/FileUpload";
import { decryptData } from "@/utils/dataManipulation";
import { generateOneFileDataFromBase64 } from "@/utils/fileManipulation";
import { useEffect, useState } from "react";
import { ButtonWrapper, PromptText, Title, Wrapper } from "./_tambahDPIB";
import { saveData } from "./network";

function TambahDPIB(props: any) {
  const [id, setId] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [file, setFile] = useState<any>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //Prefill
  useEffect(() => {
    const data = props?.data;
    if (data?.deskripsi && data?.file) {
      if (data?.id) {
        setId(data?.id);
      }
      setDeskripsi(decryptData(data.deskripsi));
      generateOneFileDataFromBase64({
        fileName: "File_File",
        base64: data?.file,
        setData: setFile,
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

  const handleDeskripsiChange = (e: any) => {
    setDeskripsi(e.target.value);
  };

  const handleAddClick = () => {
    if (deskripsi && file.length > 0) {
      const data = { id, deskripsi, file };
      const func = {
        setId,
        setDeskripsi,
        setFile,
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
      <Title>{id ? "Ubah Data" : "Tambah Data"}</Title>
      <FieldWrapper>
        <InputText
          label="Deskripsi"
          value={deskripsi}
          onChange={(e) => handleDeskripsiChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <FileUpload
          label="File"
          value={file}
          onChange={(data) => setFile(data)}
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

export default TambahDPIB;
