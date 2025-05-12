import { API_FETCH_SISWA } from "@/constant/api";
import { decryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const fetch = (func: any) => {
  const { setRawData, setListFetchAPI } = func;
  request(API_FETCH_SISWA, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            kelas: decryptData(item.kelas),
            nis: decryptData(item.nis),
            nama: decryptData(item.nama),
            jenisKelamin: decryptData(item.jenisKelamin),
            alamat: decryptData(item.alamat),
          };
        });
        setRawData(result);

        setListFetchAPI((prev: any) => {
          return { ...prev, fetchSiswa: false };
        });
      }
    })
    .catch((e) => console.log(e));
};
