import { Button, FieldWrapper, InputText } from "@/components";
import FileUpload from "@/components/FileUpload";
import { generateOneFileDataFromBase64 } from "@/utils/fileManipulation";
import { useEffect, useState } from "react";
import {
  ButtonWrapper,
  PromptText,
  Title,
  Wrapper,
} from "./_tambahDaftarHadir";
import { saveData } from "./network";

function TambahDaftarHadir(props: any) {
  const [id, setId] = useState("");
  const [kelas, setKelas] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [tahunAjar, setTahunAjar] = useState("");
  const [file, setFile] = useState<any>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //Prefill
  useEffect(() => {
    const data = props?.data;
    if (data?.kelas && data?.jurusan && data?.tahunAjar && data?.file) {
      if (data?.id) {
        setId(data?.id);
      }
      setKelas(data.kelas);
      setJurusan(data.jurusan);
      setTahunAjar(data.tahunAjar);
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

  const handleKelasChange = (e: any) => {
    setKelas(e.target.value);
  };

  const handleJurusanChange = (e: any) => {
    setJurusan(e.target.value);
  };

  const handleTahunAjarChange = (e: any) => {
    setTahunAjar(e.target.value);
  };

  const handleAddClick = () => {
    if (kelas && jurusan && tahunAjar && file.length > 0) {
      const data = { id, kelas, jurusan, tahunAjar, file };
      const func = {
        setId,
        setKelas,
        setJurusan,
        setTahunAjar,
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
          label="Kelas"
          value={kelas}
          onChange={(e) => handleKelasChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Jurusan"
          value={jurusan}
          onChange={(e) => handleJurusanChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Tahun Ajar"
          value={tahunAjar}
          onChange={(e) => handleTahunAjarChange(e)}
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

export default TambahDaftarHadir;
