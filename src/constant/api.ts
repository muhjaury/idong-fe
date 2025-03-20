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

export const API_VERIFY = BASE_URL + "api/user/verify";
export const API_REGISTER_ADMIN = BASE_URL + "api/user/registerUser";
export const API_FETCH_ADMIN = BASE_URL + "api/user/fetchAdmin";
export const API_FETCH_GURU = BASE_URL + "api/user/fetchGuru";
export const API_DELETE_USER = BASE_URL + "api/user/deleteUser";
