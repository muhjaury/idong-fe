import { API_VERIFY } from "@/constant/api";
import { urls } from "@/constant/path";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const verifyCred = (func: any, email: string, password: string) => {
  const { setListFetchAPI, router, setError, dispatch, ADD_USER_DATA } = func;

  const emailEnc = encryptData(email);
  const passwordEnc = encryptData(password);

  const data = { email: emailEnc, password: passwordEnc };

  request(API_VERIFY, "POST", null, data)
    .then((res) => {
      if (res?.status.toLowerCase() === "success") {
        dispatch(
          ADD_USER_DATA({
            isLogin: true,
            name: res?.data?.name,
            role: res?.data?.role,
          })
        );
        router.push(urls.DASHBOARD);

        setListFetchAPI((prev: any) => {
          return { ...prev, verifyCred: false };
        });
      } else {
        setError("Invalid Username or Password");

        setListFetchAPI((prev: any) => {
          return { ...prev, verifyCred: false };
        });
      }
    })
    .catch(() => setError("Connection Error"));
};
