import { Button } from "@/components";
import { API_DELETE_PELANGGARAN, API_FETCH_PELANGGARAN } from "@/constant/api";
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
  const { setDisplayModal, setModalData, setRawData, setLoading } = func;
  request(API_FETCH_PELANGGARAN, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            nis: item.nis,
            pelanggaran: item.pelanggaran,
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
