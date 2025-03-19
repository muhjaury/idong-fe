import { VERIFY_API } from "@/constant/api";
import { urls } from "@/constant/path";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const verifyCred = (func: any, email: string, password: string) => {
  const { router, setError } = func;

  const emailEnc = encryptData(email);
  const passwordEnc = encryptData(password);

  const data = { email: emailEnc, password: passwordEnc };

  request(VERIFY_API, "POST", null, data)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        router.push(urls.DASHBOARD);
      } else {
        setError("Invalid Username or Password");
      }
    })
    .catch(() => setError("Connection Error"));
};
