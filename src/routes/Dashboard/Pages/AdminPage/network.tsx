import { Button } from "@/components";
import { API_DELETE_USER, API_FETCH_ADMIN } from "@/constant/api";
import request from "@/utils/request";
import { ButtonWrapper } from "./_adminPage";

const handleDeleteAdmin = async (func: any, id: number) => {
  const data = { id };
  request(API_DELETE_USER, "POST", null, data)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        fetchAdmin(func);
      }
    })
    .catch((e) => console.log(e));
};

export const fetchAdmin = (func: any) => {
  const { setRawData } = func;
  request(API_FETCH_ADMIN, "GET", null, null)
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
                  onClick={() => handleDeleteAdmin(func, item.id)}
                  type="tertiary"
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
