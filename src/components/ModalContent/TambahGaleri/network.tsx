import { API_REGISTER_GALERI } from "@/constant/api";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const { setId, setJudul, setDeskripsi, setFoto, setError, setSuccess } = func;
  const { id, judul, deskripsi, foto } = data;

  const judulEnc = encryptData(judul);
  const deskripsiEnc = encryptData(deskripsi);

  let bodyData: any = {
    judul: judulEnc,
    deskripsi: deskripsiEnc,
    foto: foto[0].base64,
  };
  if (id) {
    bodyData = { ...bodyData, id: id };
  }
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_REGISTER_GALERI, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      if (id) {
        setSuccess("Berhasil mengubah data");
      } else {
        setId("");
        setJudul("");
        setDeskripsi("");
        setFoto("");
        setSuccess("Berhasil menambahkan data");
      }
    } else {
      setError("Data gagal ditambahkan");
    }
  });
};
