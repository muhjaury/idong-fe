import { API_FETCH_PORTAL_BERITA } from "@/constant/api";
import { decryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const fetch = (func: any) => {
  const { setList, setListFetchAPI } = func;
  request(API_FETCH_PORTAL_BERITA, "GET", null, null)
    .then((res) => {
      const data = res?.data;
      if (res?.status.toLowerCase() === "success") {
        const result = data?.map((item: any) => ({
          ...item,
          deskripsi: decryptData(item?.deskripsi),
          judul: decryptData(item?.judul),
        }));

        setList(result.reverse());

        setListFetchAPI((prev: any) => {
          return { ...prev, fetchPortalBerita: false };
        });
      }
    })
    .catch((e) => console.log(e));
};
