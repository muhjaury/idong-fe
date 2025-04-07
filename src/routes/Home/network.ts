import {
  API_BERANDA_FETCH_BERITA,
  API_BERANDA_FETCH_KEPALA_SEKOLAH,
} from "@/constant/api";
import { decryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const fetchKepalaSekolah = (func: any) => {
  const { setNamaKepsek, setSambutanKepsek, setFotoKepsek } = func;
  request(API_BERANDA_FETCH_KEPALA_SEKOLAH, "GET", null, null)
    .then((res) => {
      const data = res?.data;
      if (res?.status.toLowerCase() === "success") {
        setNamaKepsek(decryptData(data[0]?.principleName));
        setSambutanKepsek(decryptData(data[0]?.principleGreeting));
        setFotoKepsek(data[0]?.principleFile);
      }
    })
    .catch((e) => console.log(e));
};

export const fetchBerita = (func: any) => {
  const { setBerita } = func;
  request(API_BERANDA_FETCH_BERITA, "GET", null, null)
    .then((res) => {
      const data = res?.data;
      if (res?.status.toLowerCase() === "success") {
        const result = data?.map((item: any) => ({
          ...item,
          deskripsi: decryptData(item?.deskripsi),
          judul: decryptData(item?.judul),
        }));
        setBerita(result);
      }
    })
    .catch((e) => console.log(e));
};
