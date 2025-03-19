const baseUrl = () => {
  let url;
  if (["local"].includes(process.env.NEXT_PUBLIC_TYPE!)) {
    url = "http://localhost:3001/";
  } else {
    url = "";
  }
  return url;
};

const BASE_URL = baseUrl();

export const VERIFY_API = BASE_URL + "api/user/verify";
export const REGISTER_ADMIN_API = BASE_URL + "api/user/registerAdmin";
