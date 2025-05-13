import { API_REGISTER_TATA_TERTIB } from "@/constant/api";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const { setId, setNama, setFile, setError, setSuccess, setLoading } = func;
  const { id, nama, file } = data;

  const namaEnc = encryptData(nama);

  let bodyData: any = {
    nama: namaEnc,
    file: file[0].base64,
  };
  if (id) {
    bodyData = { ...bodyData, id: id };
  }
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_REGISTER_TATA_TERTIB, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      if (id) {
        setSuccess("Berhasil mengubah data");
      } else {
        setId("");
        setNama("");
        setFile("");
        setSuccess("Berhasil menambahkan data");
      }
    } else {
      setError("Data gagal ditambahkan");
    }

    setLoading(false);
  });
};
