import { API_FETCH_TENAGA_PENDIDIK } from "@/constant/api";
import request from "@/utils/request";

export const fetch = (func: any) => {
  const { setList, setListFetchAPI } = func;
  request(API_FETCH_TENAGA_PENDIDIK, "GET", null, null)
    .then((res) => {
      const data = res?.data;
      if (res?.status.toLowerCase() === "success") {
        setList(data);

        setListFetchAPI((prev: any) => {
          return { ...prev, fetchTenagaPendidik: false };
        });
      }
    })
    .catch((e) => console.log(e));
};
