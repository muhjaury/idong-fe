import { Button, DisplayFile } from "@/components";
import {
  API_DELETE_PETA_STATUS_KONTAK,
  API_FETCH_PETA_STATUS_KONTAK,
} from "@/constant/api";
import { decryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";
import { ButtonWrapper } from "./_petaStatusKontakPage";

const handleDelete = async (func: any, id: number) => {
  const data = { id };
  request(API_DELETE_PETA_STATUS_KONTAK, "POST", null, data)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        fetch(func);
      }
    })
    .catch((e) => console.log(e));
};

export const fetch = (func: any) => {
  const { setDisplayModal, setModalData, setRawData, setLoading } = func;
  request(API_FETCH_PETA_STATUS_KONTAK, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            lokasi: decryptData(item.lokasi),
            nomorTelepon: decryptData(item.nomorTelepon),
            email: decryptData(item.email),
            instagram: decryptData(item.instagram),
            facebook: decryptData(item.facebook),
            maps: (
              <ButtonWrapper>
                <DisplayFile base64={item.maps} />
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
                  type="secondary"
                >
                  Ubah
                </Button>
                <Button
                  removeshadow="Y"
                  onClick={() => {
                    setLoading(true);
                    handleDelete(func, item.id);
                  }}
                  type="tertiary"
                >
                  Hapus
                </Button>
              </ButtonWrapper>
            ),
          };
        });
        setRawData(result);

        setLoading(false);
      }
    })
    .catch((e) => console.log(e));
};
