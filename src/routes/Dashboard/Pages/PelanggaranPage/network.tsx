import { Button } from "@/components";
import { API_DELETE_PELANGGARAN, API_FETCH_PELANGGARAN } from "@/constant/api";
import { decryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";
import { ButtonWrapper } from "./_pelanggaranPage";

const handleDelete = async (func: any, id: number) => {
  const data = { id };
  request(API_DELETE_PELANGGARAN, "POST", null, data)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        fetch(func);
      }
    })
    .catch((e) => console.log(e));
};

export const fetch = (func: any) => {
  const { setDisplayModal, setModalData, setRawData } = func;
  request(API_FETCH_PELANGGARAN, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            nis: decryptData(item.nis),
            pelanggaran: decryptData(item.pelanggaran),
            aksi: (
              <ButtonWrapper>
                <Button
                  removeshadow="Y"
                  onClick={() => {
                    setModalData(item);
                    setDisplayModal(true);
                  }}
                >
                  Ubah
                </Button>
                <Button
                  removeshadow="Y"
                  onClick={() => handleDelete(func, item.id)}
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
