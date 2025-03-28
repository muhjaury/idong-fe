import { Button, DisplayFile } from "@/components";
import {
  API_DELETE_SCHOOL_PROFILE,
  API_FETCH_SCHOOL_PROFILE,
} from "@/constant/api";
import { decryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";
import { ButtonWrapper } from "./_profilSekolahPage";

const handleDeleteSP = async (func: any, id: number) => {
  const data = { id };
  request(API_DELETE_SCHOOL_PROFILE, "POST", null, data)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        fetchSchoolProfile(func);
      }
    })
    .catch((e) => console.log(e));
};

export const fetchSchoolProfile = (func: any) => {
  const { setDisplayModal, setModalData, setRawData } = func;
  request(API_FETCH_SCHOOL_PROFILE, "GET", null, null)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        let result = res?.data;
        result = result.map((item: any, index: number) => {
          return {
            nomor: index + 1,
            namaKepalaSekolah: decryptData(item.principleName),
            fotoKepalaSekolah: (
              <ButtonWrapper>
                <DisplayFile base64={item.principleFile} />
              </ButtonWrapper>
            ),
            sambutanKepalaSekolah: decryptData(item.principleGreeting),
            visiMisi: (
              <ButtonWrapper>
                <DisplayFile base64={item.visionMissionFile} />
              </ButtonWrapper>
            ),
            strukturOrganisasi: (
              <ButtonWrapper>
                <DisplayFile base64={item.orgStructureFile} />
              </ButtonWrapper>
            ),
            kalenderAkademik: (
              <ButtonWrapper>
                <DisplayFile base64={item.academicCalenderFile} />
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
                  onClick={() => handleDeleteSP(func, item.id)}
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
