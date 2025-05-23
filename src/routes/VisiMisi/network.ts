import { API_VISI_MISI_FETCH } from "@/constant/api";
import request from "@/utils/request";

export const fetch = (func: any) => {
  const { setFile, setListFetchAPI } = func;
  request(API_VISI_MISI_FETCH, "GET", null, null)
    .then((res) => {
      const data = res?.data;
      if (res?.status.toLowerCase() === "success") {
        setFile(data[0]?.visionMissionFile);

        setListFetchAPI((prev: any) => {
          return { ...prev, fetchVisiMisi: false };
        });
      }
    })
    .catch((e) => console.log(e));
};
