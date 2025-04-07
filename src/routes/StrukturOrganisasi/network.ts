import { API_STRUKTUR_ORGANISASI_FETCH } from "@/constant/api";
import request from "@/utils/request";

export const fetch = (func: any) => {
  const { setFile } = func;
  request(API_STRUKTUR_ORGANISASI_FETCH, "GET", null, null)
    .then((res) => {
      const data = res?.data;
      if (res?.status.toLowerCase() === "success") {
        setFile(data[0]?.orgStructureFile);
      }
    })
    .catch((e) => console.log(e));
};
