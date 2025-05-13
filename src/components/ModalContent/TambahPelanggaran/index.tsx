import { Button, FieldWrapper, InputText } from "@/components";
import { useWidget } from "@/context";
import { useEffect, useState } from "react";
import {
  ButtonWrapper,
  PromptText,
  Title,
  Wrapper,
} from "./_tambahPelanggaran";
import { saveData } from "./network";

function TambahPelanggaran(props: any) {
  const [id, setId] = useState("");
  const [nis, setNis] = useState("");
  const [pelanggaran, setPelanggaran] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { setLoading } = useWidget();

  //Prefill
  useEffect(() => {
    const data = props?.data;
    if (data?.nis && data?.pelanggaran) {
      if (data?.id) {
        setId(data?.id);
      }
      setNis(data.nis);
      setPelanggaran(data.pelanggaran);
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

  const handleNisChange = (e: any) => {
    setNis(e.target.value);
  };

  const handlePelanggaranChange = (e: any) => {
    setPelanggaran(e.target.value);
  };

  const handleAddClick = () => {
    if (nis && pelanggaran) {
      setLoading(true);

      const data = { id, nis, pelanggaran };
      const func = {
        setId,
        setNis,
        setPelanggaran,
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
          label="NIS"
          value={nis}
          onChange={(e) => handleNisChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Pelanggaran"
          value={pelanggaran}
          onChange={(e) => handlePelanggaranChange(e)}
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

export default TambahPelanggaran;
