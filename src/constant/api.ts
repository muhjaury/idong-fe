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
export const API_REGISTER_SCHOOL_PROFILE = BASE_URL + "schoolProfile/register";
export const API_FETCH_SCHOOL_PROFILE = BASE_URL + "schoolProfile/fetch";
export const API_DELETE_SCHOOL_PROFILE = BASE_URL + "schoolProfile/delete";
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
export const API_FETCH_SARANA_PRASARANA = BASE_URL + "saranaPrasarana/fetch";
export const API_REGISTER_SARANA_PRASARANA =
  BASE_URL + "saranaPrasarana/register";
export const API_DELETE_SARANA_PRASARANA = BASE_URL + "saranaPrasarana/delete";
export const API_FETCH_PETA_STATUS_KONTAK = BASE_URL + "petaStatusKontak/fetch";
export const API_REGISTER_PETA_STATUS_KONTAK =
  BASE_URL + "petaStatusKontak/register";
export const API_DELETE_PETA_STATUS_KONTAK =
  BASE_URL + "petaStatusKontak/delete";
export const API_FETCH_PORTAL_BERITA = BASE_URL + "portalBerita/fetch";
export const API_REGISTER_PORTAL_BERITA = BASE_URL + "portalBerita/register";
export const API_DELETE_PORTAL_BERITA = BASE_URL + "portalBerita/delete";
export const API_FETCH_GALERI = BASE_URL + "galeri/fetch";
export const API_REGISTER_GALERI = BASE_URL + "galeri/register";
export const API_DELETE_GALERI = BASE_URL + "galeri/delete";
export const API_FETCH_ARSIP = BASE_URL + "arsip/fetch";
export const API_REGISTER_ARSIP = BASE_URL + "arsip/register";
export const API_DELETE_ARSIP = BASE_URL + "arsip/delete";
export const API_FETCH_TKJ = BASE_URL + "tkj/fetch";
export const API_REGISTER_TKJ = BASE_URL + "tkj/register";
export const API_DELETE_TKJ = BASE_URL + "tkj/delete";
export const API_FETCH_TBSM = BASE_URL + "tbsm/fetch";
export const API_REGISTER_TBSM = BASE_URL + "tbsm/register";
export const API_DELETE_TBSM = BASE_URL + "tbsm/delete";
export const API_FETCH_DPIB = BASE_URL + "dpib/fetch";
export const API_REGISTER_DPIB = BASE_URL + "dpib/register";
export const API_DELETE_DPIB = BASE_URL + "dpib/delete";
export const API_FETCH_TRKO = BASE_URL + "trko/fetch";
export const API_REGISTER_TRKO = BASE_URL + "trko/register";
export const API_DELETE_TRKO = BASE_URL + "trko/delete";
export const API_FETCH_ATPH = BASE_URL + "atph/fetch";
export const API_REGISTER_ATPH = BASE_URL + "atph/register";
export const API_DELETE_ATPH = BASE_URL + "atph/delete";
export const API_FETCH_TATA_TERTIB = BASE_URL + "tataTertib/fetch";
export const API_REGISTER_TATA_TERTIB = BASE_URL + "tataTertib/register";
export const API_DELETE_TATA_TERTIB = BASE_URL + "tataTertib/delete";
