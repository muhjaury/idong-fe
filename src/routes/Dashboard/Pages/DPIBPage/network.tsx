import { Button, DisplayFile } from "@/components";
import { API_DELETE_DPIB, API_FETCH_DPIB } from "@/constant/api";
import { decryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";
import { ButtonWrapper } from "./_DPIBPage";

const handleDelete = async (func: any, id: number) => {
  const data = { id };
  request(API_DELETE_DPIB, "POST", null, data)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        fetch(func);
      }
    })
    .catch((e) => console.log(e));
};

export const fetch = (func: any) => {
  const { setDisplayModal, setModalData, setRawData } = func;
  request(API_FETCH_DPIB, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            deskripsi: decryptData(item.deskripsi),
            file: (
              <ButtonWrapper>
                <DisplayFile base64={item.file} />
              </ButtonWrapper>
            ),
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
