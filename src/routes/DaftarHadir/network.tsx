import { DisplayFile } from "@/components";
import { API_DAFTAR_HADIR_FETCH } from "@/constant/api";
import request from "@/utils/request";
import { ButtonWrapper } from "./_daftarHadir";

export const fetch = (data: any, func: any) => {
  const { jurusan, kelas, tahunAjar } = data;
  const { setData, setShowTable, setListFetchAPI } = func;

  let bodyData: any = { kelas, jurusan, tahunAjar };
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_DAFTAR_HADIR_FETCH, "POST", null, body)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            kelas: item.kelas,
            jurusan: item.jurusan,
            tahunAjar: item.tahunAjar,
            file: (
              <ButtonWrapper>
                <DisplayFile base64={item.file} />
              </ButtonWrapper>
            ),
          };
        });
        setData(result);
        setShowTable(true);

        setListFetchAPI((prev: any) => {
          return { ...prev, fetchDaftarHadir: false };
        });
      }
    })
    .catch((e) => console.log(e));
};
