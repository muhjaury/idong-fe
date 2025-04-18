import { Button } from "@/components";
import { API_DELETE_USER, API_FETCH_GURU } from "@/constant/api";
import request from "@/utils/request";
import { ButtonWrapper } from "./_guruPage";

const handleDeleteGuru = async (func: any, id: number) => {
  const data = { id };
  request(API_DELETE_USER, "POST", null, data)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        fetchGuru(func);
      }
    })
    .catch((e) => console.log(e));
};

export const fetchGuru = (func: any) => {
  const { setRawData } = func;
  request(API_FETCH_GURU, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            nama: item.name,
            email: item.email,
            aksi: (
              <ButtonWrapper>
                <Button
                  removeshadow="Y"
                  onClick={() => handleDeleteGuru(func, item.id)}
                >
                  Hapus
                </Button>
              </ButtonWrapper>
            ),
          };
        });
        setRawData(result);
      }
    })
    .catch((e) => console.log(e));
};
