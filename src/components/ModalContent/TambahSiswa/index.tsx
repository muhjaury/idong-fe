import { Button, FieldWrapper, InputText } from "@/components";
import { useWidget } from "@/context";
import { decryptData } from "@/utils/dataManipulation";
import { useEffect, useState } from "react";
import { ButtonWrapper, PromptText, Title, Wrapper } from "./_tambahSiswa";
import { saveData } from "./network";

function TambahSiswa(props: any) {
  const [id, setId] = useState("");
  const [kelas, setKelas] = useState("");
  const [nis, setNis] = useState("");
  const [nama, setNama] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [alamat, setAlamat] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { setLoading } = useWidget();

  //Prefill
  useEffect(() => {
    const data = props?.data;
    if (
      data?.kelas &&
      data?.nis &&
      data?.nama &&
      data?.jenisKelamin &&
      data?.alamat
    ) {
      if (data?.id) {
        setId(data?.id);
      }
      setKelas(decryptData(data.kelas));
      setNis(decryptData(data.nis));
      setNama(decryptData(data.nama));
      setJenisKelamin(decryptData(data.jenisKelamin));
      setAlamat(decryptData(data.alamat));
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

  const handleNisChange = (e: any) => {
    setNis(e.target.value);
  };

  const handleNamaChange = (e: any) => {
    setNama(e.target.value);
  };

  const handleJenisKelaminChange = (e: any) => {
    setJenisKelamin(e.target.value);
  };

  const handleAlamatChange = (e: any) => {
    setAlamat(e.target.value);
  };

  const handleAddClick = () => {
    if (kelas && nis && nama && jenisKelamin && alamat) {
      setLoading(true);

      const data = { id, kelas, nis, nama, jenisKelamin, alamat };
      const func = {
        setId,
        setKelas,
        setNis,
        setNama,
        setJenisKelamin,
        setAlamat,
        setError,
        setSuccess,
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
          label="Kelas"
          value={kelas}
          onChange={(e) => handleKelasChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="NIS"
          value={nis}
          onChange={(e) => handleNisChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Nama"
          value={nama}
          onChange={(e) => handleNamaChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Jenis Kelamin"
          value={jenisKelamin}
          onChange={(e) => handleJenisKelaminChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Alamat"
          value={alamat}
          onChange={(e) => handleAlamatChange(e)}
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

export default TambahSiswa;
