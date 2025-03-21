import { API_REGISTER_SCHOOL_PROFILE } from "@/constant/api";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const saveData = (func: any, data: any) => {
  const {
    setPrincipleName,
    setPrincipleFile,
    setPrincipleGreeting,
    setVisionMissionFile,
    setOrgStructureFile,
    setAcademicCalenderFile,
    setError,
    setSuccess,
  } = func;
  const {
    principleName,
    principleFile,
    principleGreeting,
    visionMissionFile,
    orgStructureFile,
    academicCalenderFile,
  } = data;

  const principleNameEnc = encryptData(principleName);
  const principleGreetingEnc = encryptData(principleGreeting);

  let body = {
    data: JSON.stringify({
      principleName: principleNameEnc,
      principleFile: principleFile,
      principleGreeting: principleGreetingEnc,
      visionMissionFile: visionMissionFile,
      orgStructureFile: orgStructureFile,
      academicCalenderFile: academicCalenderFile,
    }),
  };

  request(API_REGISTER_SCHOOL_PROFILE, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      setPrincipleName();
      setPrincipleFile([]);
      setPrincipleGreeting();
      setVisionMissionFile([]);
      setOrgStructureFile([]);
      setAcademicCalenderFile([]);
      setSuccess("Berhasil menambahkan data");
    } else {
      setError("Data gagal ditambahkan");
    }
  });
};
