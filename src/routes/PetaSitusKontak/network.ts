import { API_FETCH_PETA_STATUS_KONTAK } from "@/constant/api";
import request from "@/utils/request";

export const fetch = (func: any) => {
  const { setList } = func;
  request(API_FETCH_PETA_STATUS_KONTAK, "GET", null, null)
    .then((res) => {
      const data = res?.data;
      if (res?.status.toLowerCase() === "success") {
        setList(data);
      }
    })
    .catch((e) => console.log(e));
};
