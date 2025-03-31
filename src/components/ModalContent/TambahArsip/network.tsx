import { API_REGISTER_ARSIP } from "@/constant/api";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const { setId, setNama, setFoto, setError, setSuccess } = func;
  const { id, nama, foto } = data;

  const namaEnc = encryptData(nama);

  let bodyData: any = {
    nama: namaEnc,
    foto: foto[0].base64,
  };
  if (id) {
    bodyData = { ...bodyData, id: id };
  }
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_REGISTER_ARSIP, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      if (id) {
        setSuccess("Berhasil mengubah data");
      } else {
        setId("");
        setNama("");
        setFoto("");
        setSuccess("Berhasil menambahkan data");
      }
    } else {
      setError("Data gagal ditambahkan");
    }
  });
};
