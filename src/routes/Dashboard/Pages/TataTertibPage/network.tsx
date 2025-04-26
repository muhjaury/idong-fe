import { Button, DisplayFile } from "@/components";
import { API_DELETE_TATA_TERTIB, API_FETCH_TATA_TERTIB } from "@/constant/api";
import { decryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";
import { ButtonWrapper } from "./_tataTertibPage";

const handleDelete = async (func: any, id: number) => {
  const data = { id };
  request(API_DELETE_TATA_TERTIB, "POST", null, data)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        fetch(func);
      }
    })
    .catch((e) => console.log(e));
};

export const fetch = (func: any) => {
  const { setDisplayModal, setModalData, setRawData } = func;
  request(API_FETCH_TATA_TERTIB, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            nama: decryptData(item.nama),
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
                  type="secondary"
                >
                  Ubah
                </Button>
                <Button
                  removeshadow="Y"
                  onClick={() => handleDelete(func, item.id)}
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
