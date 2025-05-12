import { API_STRUKTUR_ORGANISASI_FETCH } from "@/constant/api";
import request from "@/utils/request";

export const fetch = (func: any) => {
  const { setFile, setListFetchAPI } = func;
  request(API_STRUKTUR_ORGANISASI_FETCH, "GET", null, null)
    .then((res) => {
      const data = res?.data;
      if (res?.status.toLowerCase() === "success") {
        setFile(data[0]?.orgStructureFile);

        setListFetchAPI((prev: any) => {
          return { ...prev, fetchStrukturOrganisasi: false };
        });
      }
    })
    .catch((e) => console.log(e));
};
