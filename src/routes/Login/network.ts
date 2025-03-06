import { VERIFY_API } from "@/constant/api";
import { urls } from "@/constant/path";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const verifyCred = (func: any, username: string, password: string) => {
  const { router } = func;

  const usernameEnc = encryptData(username);
  const passwordEnc = encryptData(password);

  const data = { username: usernameEnc, password: passwordEnc };

  request(VERIFY_API, "POST", data).then((res) => {
    if (res.status.toLowerCase() === "success") {
      router.push(urls.DASHBOARD);
    }
  });
};
