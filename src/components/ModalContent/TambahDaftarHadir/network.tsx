import { API_REGISTER_DAFTAR_HADIR } from "@/constant/api";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const {
    setId,
    setKelas,
    setJurusan,
    setTahunAjar,
    setFile,
    setError,
    setSuccess,
  } = func;
  const { id, kelas, jurusan, tahunAjar, file } = data;

  const kelasEnc = encryptData(kelas);
  const jurusanEnc = encryptData(jurusan);
  const tahunAjarEnc = encryptData(tahunAjar);

  let bodyData: any = {
    kelas: kelasEnc,
    jurusan: jurusanEnc,
    tahunAjar: tahunAjarEnc,
    file: file[0].base64,
  };
  if (id) {
    bodyData = { ...bodyData, id: id };
  }
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_REGISTER_DAFTAR_HADIR, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      if (id) {
        setSuccess("Berhasil mengubah data");
      } else {
        setId("");
        setKelas("");
        setJurusan("");
        setTahunAjar("");
        setFile([]);
        setSuccess("Berhasil menambahkan data");
      }
    } else {
      setError("Data gagal ditambahkan");
    }
  });
};
