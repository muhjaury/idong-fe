import { API_REGISTER_SISWA } from "@/constant/api";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const {
    setId,
    setKelas,
    setNis,
    setNama,
    setJenisKelamin,
    setAlamat,
    setError,
    setSuccess,
    setLoading,
  } = func;
  const { id, kelas, nis, nama, jenisKelamin, alamat } = data;

  const kelasEnc = encryptData(kelas);
  const nisEnc = encryptData(nis);
  const namaEnc = encryptData(nama);
  const jenisKelaminEnc = encryptData(jenisKelamin);
  const alamatEnc = encryptData(alamat);

  let bodyData: any = {
    kelas: kelasEnc,
    nis: nisEnc,
    nama: namaEnc,
    jenisKelamin: jenisKelaminEnc,
    alamat: alamatEnc,
  };
  if (id) {
    bodyData = { ...bodyData, id: id };
  }
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_REGISTER_SISWA, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      if (id) {
        setSuccess("Berhasil mengubah data");
      } else {
        setId("");
        setKelas("");
        setNis("");
        setNama("");
        setJenisKelamin("");
        setAlamat("");
        setSuccess("Berhasil menambahkan data");
      }
    } else {
      setError("Data gagal ditambahkan");
    }

    setLoading(false);
  });
};
