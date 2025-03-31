import { API_REGISTER_TRKO } from "@/constant/api";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const { setId, setDeskripsi, setFile, setError, setSuccess } = func;
  const { id, deskripsi, file } = data;

  const deskripsiEnc = encryptData(deskripsi);

  let bodyData: any = {
    deskripsi: deskripsiEnc,
    file: file[0].base64,
  };
  if (id) {
    bodyData = { ...bodyData, id: id };
  }
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_REGISTER_TRKO, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      if (id) {
        setSuccess("Berhasil mengubah data");
      } else {
        setId("");
        setDeskripsi("");
        setFile("");
        setSuccess("Berhasil menambahkan data");
      }
    } else {
      setError("Data gagal ditambahkan");
    }
  });
};
