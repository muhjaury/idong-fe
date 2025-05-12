import { API_FETCH_SARANA_PRASARANA } from "@/constant/api";
import request from "@/utils/request";

export const fetch = (func: any) => {
  const { setList, setListFetchAPI } = func;
  request(API_FETCH_SARANA_PRASARANA, "GET", null, null)
    .then((res) => {
      const data = res?.data;
      if (res?.status.toLowerCase() === "success") {
        setList(data);

        setListFetchAPI((prev: any) => {
          return { ...prev, fetchSaranaPrasarana: false };
        });
      }
    })
    .catch((e) => console.log(e));
};
