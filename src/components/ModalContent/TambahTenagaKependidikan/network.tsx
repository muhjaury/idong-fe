import { API_REGISTER_TENAGA_KEPENDIDIKAN } from "@/constant/api";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const {
    setId,
    setNama,
    setDeskripsi,
    setFoto,
    setError,
    setSuccess,
    setLoading,
  } = func;
  const { id, nama, deskripsi, foto } = data;

  const namaEnc = encryptData(nama);
  const deskripsiEnc = encryptData(deskripsi);

  let bodyData: any = {
    nama: namaEnc,
    deskripsi: deskripsiEnc,
    foto: foto[0].base64,
  };
  if (id) {
    bodyData = { ...bodyData, id: id };
  }
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_REGISTER_TENAGA_KEPENDIDIKAN, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      if (id) {
        setSuccess("Berhasil mengubah data");
      } else {
        setId("");
        setNama("");
        setDeskripsi("");
        setFoto("");
        setSuccess("Berhasil menambahkan data");
      }
    } else {
      setError("Data gagal ditambahkan");
    }

    setLoading(false);
  });
};
