import { Button, DisplayFile } from "@/components";
import {
  API_FETCH_TENAGA_KEPENDIDIKAN,
  API_REGISTER_TENAGA_KEPENDIDIKAN,
} from "@/constant/api";
import { decryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";
import { ButtonWrapper } from "./_tenagaPendidikPage";

const handleDelete = async (func: any, id: number) => {
  const data = { id };
  request(API_REGISTER_TENAGA_KEPENDIDIKAN, "POST", null, data)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        fetch(func);
      }
    })
    .catch((e) => console.log(e));
};

export const fetch = (func: any) => {
  const { setDisplayModal, setModalData, setRawData } = func;
  request(API_FETCH_TENAGA_KEPENDIDIKAN, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            nama: decryptData(item.nama),
            deskripsi: decryptData(item.deskripsi),
            foto: (
              <ButtonWrapper>
                <DisplayFile base64={item.foto} />
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
