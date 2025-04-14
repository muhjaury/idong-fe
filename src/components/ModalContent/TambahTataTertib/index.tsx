import { Button, FieldWrapper, InputText } from "@/components";
import FileUpload from "@/components/FileUpload";
import { decryptData } from "@/utils/dataManipulation";
import { generateOneFileDataFromBase64 } from "@/utils/fileManipulation";
import { useEffect, useState } from "react";
import { ButtonWrapper, PromptText, Title, Wrapper } from "./_tambahTataTertib";
import { saveData } from "./network";

function TambahTataTertib(props: any) {
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [file, setFile] = useState<any>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //Prefill
  useEffect(() => {
    const data = props?.data;
    if (data?.nama && data?.file) {
      if (data?.id) {
        setId(data?.id);
      }
      setNama(decryptData(data.nama));
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

  const handleNamaChange = (e: any) => {
    setNama(e.target.value);
  };

  const handleAddClick = () => {
    if (nama && file.length > 0) {
      const data = { id, nama, file };
      const func = {
        setId,
        setNama,
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
          label="Nama"
          value={nama}
          onChange={(e) => handleNamaChange(e)}
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

export default TambahTataTertib;
