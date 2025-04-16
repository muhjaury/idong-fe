import { API_FETCH_TATA_TERTIB } from "@/constant/api";
import request from "@/utils/request";

export const fetch = (func: any) => {
  const { setList } = func;
  request(API_FETCH_TATA_TERTIB, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        const data = res?.data;
        setList(data);
      }
    })
    .catch((e) => console.log(e));
};
