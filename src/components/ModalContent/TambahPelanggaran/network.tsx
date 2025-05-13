import { API_REGISTER_PELANGGARAN } from "@/constant/api";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const { setId, setNis, setPelanggaran, setError, setSuccess, setLoading } =
    func;
  const { id, nis, pelanggaran } = data;

  let bodyData: any = { nis, pelanggaran };
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

    setLoading(false);
  });
};
