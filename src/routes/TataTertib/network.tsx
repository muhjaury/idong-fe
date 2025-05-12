import { API_FETCH_TATA_TERTIB } from "@/constant/api";
import request from "@/utils/request";

export const fetch = (func: any) => {
  const { setList, setListFetchAPI } = func;
  request(API_FETCH_TATA_TERTIB, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        const data = res?.data;
        setList(data);

        setListFetchAPI((prev: any) => {
          return { ...prev, fetchTataTertib: false };
        });
      }
    })
    .catch((e) => console.log(e));
};
