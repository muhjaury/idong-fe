"use client";

import { useWidget } from "@/context";
import UserLayout from "@/layout/UserLayout";
import { useEffect, useState } from "react";
import {
  ATPHPage,
  AdminPage,
  ArsipPage,
  DPIBPage,
  DaftarHadirPage,
  DashboardPage,
  GaleriPage,
  GuruPage,
  PelanggaranPage,
  PetaStatusKontakPage,
  PortalBeritaPage,
  ProfilSekolahPage,
  SaranaPrasaranaPage,
  SiswaPage,
  TBSMPage,
  TKJPage,
  TRKOPage,
  TataTertibPage,
  TenagaKependidikanPage,
  TenagaPendidikPage,
} from "./Pages";
import { Wrapper } from "./_dasboard";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState<any>(<DashboardPage />);

  const { urlChange } = useWidget();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get("page");
    if (page) {
      switch (page) {
        case "Admin":
          setActiveMenu(<AdminPage />);
          break;
        case "Guru":
          setActiveMenu(<GuruPage />);
          break;
        case "Profil-Sekolah":
          setActiveMenu(<ProfilSekolahPage />);
          break;
        case "Tenaga-Pendidik":
          setActiveMenu(<TenagaPendidikPage />);
          break;
        case "Tenaga-Kependidikan":
          setActiveMenu(<TenagaKependidikanPage />);
          break;
        case "Sarana-Prasarana":
          setActiveMenu(<SaranaPrasaranaPage />);
          break;
        case "Peta-Status-Kontak":
          setActiveMenu(<PetaStatusKontakPage />);
          break;
        case "Portal-Berita":
          setActiveMenu(<PortalBeritaPage />);
          break;
        case "Galeri":
          setActiveMenu(<GaleriPage />);
          break;
        case "Arsip":
          setActiveMenu(<ArsipPage />);
          break;
        case "Siswa":
          setActiveMenu(<SiswaPage />);
          break;
        case "Daftar-Hadir":
          setActiveMenu(<DaftarHadirPage />);
          break;
        case "Tata-Tertib":
          setActiveMenu(<TataTertibPage />);
          break;
        case "Pelanggaran":
          setActiveMenu(<PelanggaranPage />);
          break;
        case "TKJ":
          setActiveMenu(<TKJPage />);
          break;
        case "TBSM":
          setActiveMenu(<TBSMPage />);
          break;
        case "DPIB":
          setActiveMenu(<DPIBPage />);
          break;
        case "TRKO":
          setActiveMenu(<TRKOPage />);
          break;
        case "ATPH":
          setActiveMenu(<ATPHPage />);
          break;
        default:
          setActiveMenu(<DashboardPage />);
          break;
      }
    }
  }, [urlChange]);

  return (
    <UserLayout>
      <Wrapper>{activeMenu}</Wrapper>
    </UserLayout>
  );
}

export default Dashboard;
