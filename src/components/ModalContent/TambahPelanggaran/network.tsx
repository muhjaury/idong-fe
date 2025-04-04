import { API_REGISTER_PELANGGARAN } from "@/constant/api";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const { setId, setNis, setPelanggaran, setError, setSuccess } = func;
  const { id, nis, pelanggaran } = data;

  const nisEnc = encryptData(nis);
  const pelanggaranEnc = encryptData(pelanggaran);

  let bodyData: any = {
    nis: nisEnc,
    pelanggaran: pelanggaranEnc,
  };
  if (id) {
    bodyData = { ...bodyData, id: id };
  }
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_REGISTER_PELANGGARAN, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      if (id) {
        setSuccess("Berhasil mengubah data");
      } else {
        setId("");
        setNis("");
        setPelanggaran("");
        setSuccess("Berhasil menambahkan data");
      }
    } else {
      setError("Data gagal ditambahkan");
    }
  });
};
