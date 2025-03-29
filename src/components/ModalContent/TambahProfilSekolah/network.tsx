import { API_REGISTER_SCHOOL_PROFILE } from "@/constant/api";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const {
    setId,
    setPrincipleName,
    setPrincipleFile,
    setPrincipleGreeting,
    setVisionMissionFile,
    setOrgStructureFile,
    setAcademicCalenderFile,
    setError,
    setSuccess,
    onClose,
  } = func;
  const {
    id,
    principleName,
    principleFile,
    principleGreeting,
    visionMissionFile,
    orgStructureFile,
    academicCalenderFile,
  } = data;

  const principleNameEnc = encryptData(principleName);
  const principleGreetingEnc = encryptData(principleGreeting);

  let bodyData: any = {
    principleName: principleNameEnc,
    principleFile: principleFile[0].base64,
    principleGreeting: principleGreetingEnc,
    visionMissionFile: visionMissionFile[0].base64,
    orgStructureFile: orgStructureFile[0].base64,
    academicCalenderFile: academicCalenderFile[0].base64,
  };
  if (id) {
    bodyData = { ...bodyData, id: id };
  }
  const body = {
    data: JSON.stringify(bodyData),
  };

  request(API_REGISTER_SCHOOL_PROFILE, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      if (id) {
        setSuccess("Berhasil mengubah data");
      } else {
        setId("");
        setPrincipleName("");
        setPrincipleFile([]);
        setPrincipleGreeting("");
        setVisionMissionFile([]);
        setOrgStructureFile([]);
        setAcademicCalenderFile([]);
        setSuccess("Berhasil menambahkan data");
        onClose();
      }
    } else {
      setError("Data gagal ditambahkan");
    }
  });
};
