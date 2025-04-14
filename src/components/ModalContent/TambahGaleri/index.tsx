import { Button, FieldWrapper, InputText } from "@/components";
import FileUpload from "@/components/FileUpload";
import { decryptData } from "@/utils/dataManipulation";
import { generateOneFileDataFromBase64 } from "@/utils/fileManipulation";
import { useEffect, useState } from "react";
import { ButtonWrapper, PromptText, Title, Wrapper } from "./_tambahGaleri";
import { saveData } from "./network";

function TambahGaleri(props: any) {
  const [id, setId] = useState("");
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [foto, setFoto] = useState<any>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //Prefill
  useEffect(() => {
    const data = props?.data;
    if (data?.judul && data?.deskripsi && data?.foto) {
      if (data?.id) {
        setId(data?.id);
      }
      setJudul(decryptData(data.judul));
      setDeskripsi(decryptData(data.deskripsi));
      generateOneFileDataFromBase64({
        fileName: "File_Foto",
        base64: data?.foto,
        setData: setFoto,
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

  const handleJudulChange = (e: any) => {
    setJudul(e.target.value);
  };

  const handleDeskripsiChange = (e: any) => {
    setDeskripsi(e.target.value);
  };

  const handleAddClick = () => {
    if (judul && deskripsi && foto.length > 0) {
      const data = { id, judul, deskripsi, foto };
      const func = {
        setId,
        setJudul,
        setDeskripsi,
        setFoto,
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
          label="Judul"
          value={judul}
          onChange={(e) => handleJudulChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Deskripsi"
          value={deskripsi}
          onChange={(e) => handleDeskripsiChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <FileUpload
          label="Foto"
          value={foto}
          onChange={(data) => setFoto(data)}
          accept="img"
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

export default TambahGaleri;
