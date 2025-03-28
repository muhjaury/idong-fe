const baseUrl = () => {
  let url;
  if (["local"].includes(process.env.NEXT_PUBLIC_TYPE!)) {
    url = "http://localhost:3001/api/";
  } else {
    url = "";
  }
  return url;
};

const BASE_URL = baseUrl();

export const API_VERIFY = BASE_URL + "user/verify";
export const API_REGISTER_ADMIN = BASE_URL + "user/registerUser";
export const API_FETCH_ADMIN = BASE_URL + "user/fetchAdmin";
export const API_FETCH_GURU = BASE_URL + "user/fetchGuru";
export const API_DELETE_USER = BASE_URL + "user/deleteUser";
export const API_REGISTER_SCHOOL_PROFILE = BASE_URL + "registerSchoolProfile";
export const API_FETCH_SCHOOL_PROFILE = BASE_URL + "fetchSchoolProfile";
export const API_DELETE_SCHOOL_PROFILE = BASE_URL + "deleteSchoolProfile";
export const API_FETCH_TENAGA_PENDIDIK = BASE_URL + "tenagaPendidik/fetch";
export const API_REGISTER_TENAGA_PENDIDIK =
  BASE_URL + "tenagaPendidik/register";
export const API_DELETE_TENAGA_PENDIDIK = BASE_URL + "tenagaPendidik/delete";
export const API_FETCH_TENAGA_KEPENDIDIKAN =
  BASE_URL + "tenagaKependidikan/fetch";
export const API_REGISTER_TENAGA_KEPENDIDIKAN =
  BASE_URL + "tenagaKependidikan/register";
export const API_DELETE_TENAGA_KEPENDIDIKAN =
  BASE_URL + "tenagaKependidikan/delete";
