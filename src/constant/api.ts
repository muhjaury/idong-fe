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
export const API_FETCH_SISWA = BASE_URL + "siswa/fetch";
export const API_REGISTER_SISWA = BASE_URL + "siswa/register";
export const API_DELETE_SISWA = BASE_URL + "siswa/delete";
export const API_FETCH_DAFTAR_HADIR = BASE_URL + "daftarHadir/fetch";
export const API_REGISTER_DAFTAR_HADIR = BASE_URL + "daftarHadir/register";
export const API_DELETE_DAFTAR_HADIR = BASE_URL + "daftarHadir/delete";
export const API_FETCH_PELANGGARAN = BASE_URL + "pelanggaran/fetch";
export const API_REGISTER_PELANGGARAN = BASE_URL + "pelanggaran/register";
export const API_DELETE_PELANGGARAN = BASE_URL + "pelanggaran/delete";

export const API_BERANDA_FETCH_KEPALA_SEKOLAH =
  BASE_URL + "beranda/kepalaSekolah";
export const API_BERANDA_FETCH_BERITA = BASE_URL + "beranda/berita";
export const API_STRUKTUR_ORGANISASI_FETCH =
  BASE_URL + "strukturOrganisasi/fetch";
export const API_VISI_MISI_FETCH = BASE_URL + "visiMisi/fetch";
export const API_KALENDER_AKADEMIK_FETCH = BASE_URL + "kalenderAkademik/fetch";
export const API_DAFTAR_HADIR_FETCH = BASE_URL + "daftarHadir/fetchData";
export const API_PELANGGARAN_FETCH = BASE_URL + "pelanggaran/fetchData";
