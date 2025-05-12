import { DisplayFile } from "@/components";
import { API_FETCH_ARSIP } from "@/constant/api";
import { decryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";
import { ButtonWrapper } from "./_arsip";

export const fetch = (func: any) => {
  const { setRawData, setListFetchAPI } = func;
  request(API_FETCH_ARSIP, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            nama: decryptData(item.nama),
            foto: (
              <ButtonWrapper>
                <DisplayFile base64={item.foto} />
              </ButtonWrapper>
            ),
          };
        });
        setRawData(result);

        setListFetchAPI((prev: any) => {
          return { ...prev, fetchArsip: false };
        });
      }
    })
    .catch((e) => console.log(e));
};
