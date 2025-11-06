import { API_REGISTER_PETA_STATUS_KONTAK } from "@/constant/api";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const {
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
    onClose,
    setLoading,
  } = func;
  const {
    id,
    lokasi,
    nomorTelepon,
    email,
    instagram,
    facebook,
    youtube,
    maps,
    pendaftaranSiswaBaru,
  } = data;

  const lokasiEnc = encryptData(lokasi);
  const nomorTeleponEnc = encryptData(nomorTelepon);
  const emailEnc = encryptData(email);
  const instagramEnc = encryptData(instagram);
  const facebookEnc = encryptData(facebook);
  const youtubeEnc = encryptData(youtube);

  let bodyData: any = {
    lokasi: lokasiEnc,
    nomorTelepon: nomorTeleponEnc,
    email: emailEnc,
    instagram: instagramEnc,
    facebook: facebookEnc,
    youtube: youtubeEnc,
    maps: maps[0].base64,
    pendaftaranSiswaBaru: pendaftaranSiswaBaru[0].base64,
  };
  if (id) {
    bodyData = { ...bodyData, id: id };
  }
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_REGISTER_PETA_STATUS_KONTAK, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      if (id) {
        setSuccess("Berhasil mengubah data");
      } else {
        setId("");
        setLokasi("");
        setNomorTelepon("");
        setEmail("");
        setInstagram("");
        setFacebook("");
        setYoutube("");
        setMaps([]);
        setPendaftaranSiswaBaru([]);
        setSuccess("Berhasil menambahkan data");
        onClose();
      }
    } else {
      setError("Data gagal ditambahkan");
    }

    setLoading(false);
  });
};
