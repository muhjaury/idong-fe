import { Button, FieldWrapper, InputText } from "@/components";
import FileUpload from "@/components/FileUpload";
import { decryptData } from "@/utils/dataManipulation";
import { generateOneFileDataFromBase64 } from "@/utils/fileManipulation";
import { useEffect, useState } from "react";
import {
  ButtonWrapper,
  PromptText,
  Title,
  Wrapper,
} from "./_tambahPetaStatusKontak";
import { saveData } from "./network";

function TambahPetaStatusKontak(props: any) {
  const [id, setId] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [maps, setMaps] = useState<any>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //Prefill
  useEffect(() => {
    const data = props?.data;
    if (
      data?.lokasi &&
      data?.nomorTelepon &&
      data?.email &&
      data?.instagram &&
      data?.facebook &&
      data?.maps
    ) {
      if (data?.id) {
        setId(data?.id);
      }
      setLokasi(decryptData(data.lokasi));
      setNomorTelepon(decryptData(data.nomorTelepon));
      setEmail(decryptData(data.email));
      setInstagram(decryptData(data.instagram));
      setFacebook(decryptData(data.facebook));
      generateOneFileDataFromBase64({
        fileName: "File_Foto",
        base64: data?.maps,
        setData: setMaps,
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

  const handleLokasiChange = (e: any) => {
    setLokasi(e.target.value);
  };

  const handleNomorTeleponChange = (e: any) => {
    setNomorTelepon(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleInstagramChange = (e: any) => {
    setInstagram(e.target.value);
  };

  const handleFacebookChange = (e: any) => {
    setFacebook(e.target.value);
  };

  const handleAddClick = () => {
    if (
      lokasi &&
      nomorTelepon &&
      email &&
      instagram &&
      facebook &&
      maps.length > 0
    ) {
      const data = {
        id,
        lokasi,
        nomorTelepon,
        email,
        instagram,
        facebook,
        maps,
      };
      const func = {
        setId,
        setLokasi,
        setNomorTelepon,
        setEmail,
        setInstagram,
        setFacebook,
        setMaps,
        setError,
        setSuccess,
        onClose: props.onClose,
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
          label="Lokasi"
          value={lokasi}
          onChange={(e) => handleLokasiChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Nomor Telepon"
          value={nomorTelepon}
          onChange={(e) => handleNomorTeleponChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Email"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Instagram"
          value={instagram}
          onChange={(e) => handleInstagramChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Facebook"
          value={facebook}
          onChange={(e) => handleFacebookChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <FileUpload
          label="Maps"
          value={maps}
          onChange={(data) => setMaps(data)}
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

export default TambahPetaStatusKontak;
