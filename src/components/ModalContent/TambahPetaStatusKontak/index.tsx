import { Button, FieldWrapper, InputText } from "@/components";
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
} from "./_tambahPetaStatusKontak";
import { saveData } from "./network";

function TambahPetaStatusKontak(props: any) {
  const [id, setId] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [maps, setMaps] = useState<any>([]);
  const [pendaftaranSiswaBaru, setPendaftaranSiswaBaru] = useState<any>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { setLoading } = useWidget();

  //Prefill
  useEffect(() => {
    const data = props?.data;
    if (
      data?.lokasi &&
      data?.nomorTelepon &&
      data?.email &&
      data?.instagram &&
      data?.facebook &&
      data?.youtube &&
      data?.maps &&
      data?.pendaftaranSiswaBaru
    ) {
      if (data?.id) {
        setId(data?.id);
      }
      setLokasi(decryptData(data.lokasi));
      setNomorTelepon(decryptData(data.nomorTelepon));
      setEmail(decryptData(data.email));
      setInstagram(decryptData(data.instagram));
      setFacebook(decryptData(data.facebook));
      setYoutube(decryptData(data.youtube));
      generateOneFileDataFromBase64({
        fileName: "File_Foto",
        base64: data?.maps,
        setData: setMaps,
      });
      generateOneFileDataFromBase64({
        fileName: "File_Foto",
        base64: data?.pendaftaranSiswaBaru,
        setData: setPendaftaranSiswaBaru,
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

  const handleYoutubeChange = (e: any) => {
    setYoutube(e.target.value);
  };

  const handleAddClick = () => {
    if (
      lokasi &&
      nomorTelepon &&
      email &&
      instagram &&
      facebook &&
      youtube &&
      maps.length > 0 &&
      pendaftaranSiswaBaru.length > 0
    ) {
      setLoading(true);

      const data = {
        id,
        lokasi,
        nomorTelepon,
        email,
        instagram,
        facebook,
        youtube,
        maps,
        pendaftaranSiswaBaru,
      };
      const func = {
        setId,
        setLokasi,
        setNomorTelepon,
        setEmail,
        setInstagram,
        setFacebook,
        setYoutube,
        setMaps,
        setPendaftaranSiswaBaru,
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
        <InputText
          label="Youtube"
          value={youtube}
          onChange={(e) => handleYoutubeChange(e)}
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
      <FieldWrapper>
        <FileUpload
          label="Pendaftaran Siswa Baru"
          value={pendaftaranSiswaBaru}
          onChange={(data) => setPendaftaranSiswaBaru(data)}
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
