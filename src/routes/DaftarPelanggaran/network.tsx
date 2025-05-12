import { API_PELANGGARAN_FETCH } from "@/constant/api";
import request from "@/utils/request";

export const fetch = (data: any, func: any) => {
  const { nis } = data;
  const { setData, setShowTable, setListFetchAPI } = func;

  let bodyData: any = { nis };
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_PELANGGARAN_FETCH, "POST", null, body)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            nis: item.nis,
            pelanggaran: item.pelanggaran,
          };
        });
        setData(result);
        setShowTable(true);

        setListFetchAPI((prev: any) => {
          return { ...prev, fetchDaftarPelanggaran: false };
        });
      }
    })
    .catch((e) => console.log(e));
};
