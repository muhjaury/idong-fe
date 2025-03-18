import { Footer, HeaderUser, LoadingContent } from "@/components";
import { useWidget } from "@/context";
import { useEffect, useRef, useState } from "react";
import DOWN from "./../assets/img/down.png";
import {
  Content,
  ContentOverlay,
  ContentWrapper,
  SideBar,
  SideBarDropWrapper,
  SideBarDropdown,
  SideBarItem,
  SideBarItemWrapper,
  Wrapper,
} from "./_userLayout";

function UserLayout(props: any) {
  const [initLoading, setInitLoading] = useState<string>("Y");
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [sideBarHeight, setSideBarHeight] = useState<number>(0);
  const [totalHeight, setTotalHeight] = useState<number>(0);
  const [sideBar, setSideBar] = useState<string>("N");
  const [sideDropUser1, setSideDropUser1] = useState<string>("N");
  const [sideDropUser2, setSideDropUser2] = useState<string>("N");
  const [sideDropUser3, setSideDropUser3] = useState<string>("N");
  const [sideDropUser4, setSideDropUser4] = useState<string>("N");
  const [sideDropUser5, setSideDropUser5] = useState<string>("N");

  const { setUrlChange } = useWidget();

  const refContent = useRef<HTMLDivElement>(null);
  const refSideBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setInitLoading("N"), 500);
  }, []);

  useEffect(() => {
    if (refContent) {
      setContentHeight(refContent.current?.offsetHeight ?? 0);
    }
  }, [refContent]);

  useEffect(() => {
    if (refSideBar) {
      setSideBarHeight(refSideBar.current?.offsetHeight ?? 0);
    }
  }, [refSideBar]);

  useEffect(() => {
    setTotalHeight(Math.max(contentHeight, sideBarHeight));
  }, [contentHeight, sideBarHeight]);

  const handleClickMenu = (menu: string): void => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("page", menu);
    history.pushState(null, "", "?" + urlParams.toString());
    setUrlChange(menu);
    setSideBar("N");
  };

  return (
    <Wrapper>
      {initLoading === "Y" ? (
        <LoadingContent />
      ) : (
        <>
          <HeaderUser sideBar={sideBar} setSideBar={setSideBar} />
          <ContentWrapper>
            <SideBar ref={refSideBar} height={totalHeight} display={sideBar}>
              <SideBarItem onClick={() => handleClickMenu("Dashboard")}>
                Dashboard
              </SideBarItem>
              <SideBarItemWrapper
                onClick={() =>
                  setSideDropUser1(sideDropUser1 === "Y" ? "N" : "Y")
                }
              >
                <SideBarItem>User</SideBarItem>
                <SideBarDropdown
                  alt="down"
                  src={DOWN}
                  display={sideDropUser1}
                />
              </SideBarItemWrapper>
              <SideBarDropWrapper display={sideDropUser1}>
                <SideBarItem onClick={() => handleClickMenu("Admin")}>
                  Admin
                </SideBarItem>
                <SideBarItem onClick={() => handleClickMenu("Guru")}>
                  Guru
                </SideBarItem>
              </SideBarDropWrapper>
              <SideBarItemWrapper
                onClick={() =>
                  setSideDropUser2(sideDropUser2 === "Y" ? "N" : "Y")
                }
              >
                <SideBarItem>Profil</SideBarItem>
                <SideBarDropdown
                  alt="down"
                  src={DOWN}
                  display={sideDropUser2}
                />
              </SideBarItemWrapper>
              <SideBarDropWrapper display={sideDropUser2}>
                <SideBarItem onClick={() => handleClickMenu("Profil-Sekolah")}>
                  Profil Sekolah
                </SideBarItem>
                <SideBarItem onClick={() => handleClickMenu("Tenaga-Pendidik")}>
                  Tenaga Pendidik
                </SideBarItem>
                <SideBarItem
                  onClick={() => handleClickMenu("Tenaga-Kependidikan")}
                >
                  Tenaga Kependidikan
                </SideBarItem>
                <SideBarItem
                  onClick={() => handleClickMenu("Sarana-Prasarana")}
                >
                  Sarana & Prasarana
                </SideBarItem>
                <SideBarItem
                  onClick={() => handleClickMenu("Peta-Status-Kontak")}
                >
                  Peta Status - Kontak
                </SideBarItem>
              </SideBarDropWrapper>
              <SideBarItemWrapper
                onClick={() =>
                  setSideDropUser3(sideDropUser3 === "Y" ? "N" : "Y")
                }
              >
                <SideBarItem>Informasi</SideBarItem>
                <SideBarDropdown
                  alt="down"
                  src={DOWN}
                  display={sideDropUser3}
                />
              </SideBarItemWrapper>
              <SideBarDropWrapper display={sideDropUser3}>
                <SideBarItem onClick={() => handleClickMenu("Portal-Berita")}>
                  Portal Berita
                </SideBarItem>
                <SideBarItem onClick={() => handleClickMenu("Galeri")}>
                  Galeri
                </SideBarItem>
                <SideBarItem onClick={() => handleClickMenu("Arsip")}>
                  Arsip
                </SideBarItem>
              </SideBarDropWrapper>
              <SideBarItemWrapper
                onClick={() =>
                  setSideDropUser4(sideDropUser4 === "Y" ? "N" : "Y")
                }
              >
                <SideBarItem>Kesiswaan</SideBarItem>
                <SideBarDropdown
                  alt="down"
                  src={DOWN}
                  display={sideDropUser4}
                />
              </SideBarItemWrapper>
              <SideBarDropWrapper display={sideDropUser4}>
                <SideBarItem onClick={() => handleClickMenu("Siswa")}>
                  Siswa
                </SideBarItem>
                <SideBarItem onClick={() => handleClickMenu("Daftar-Hadir")}>
                  Daftar Hadir
                </SideBarItem>
                <SideBarItem onClick={() => handleClickMenu("Tata-Tertib")}>
                  Tata Tertib
                </SideBarItem>
                <SideBarItem onClick={() => handleClickMenu("Pelanggaran")}>
                  Pelanggaran
                </SideBarItem>
              </SideBarDropWrapper>
              <SideBarItemWrapper
                onClick={() =>
                  setSideDropUser5(sideDropUser5 === "Y" ? "N" : "Y")
                }
              >
                <SideBarItem>Jurusan</SideBarItem>
                <SideBarDropdown
                  alt="down"
                  src={DOWN}
                  display={sideDropUser5}
                />
              </SideBarItemWrapper>
              <SideBarDropWrapper display={sideDropUser5}>
                <SideBarItem onClick={() => handleClickMenu("TKJ")}>
                  TKJ
                </SideBarItem>
                <SideBarItem onClick={() => handleClickMenu("TBSM")}>
                  TBSM
                </SideBarItem>
                <SideBarItem onClick={() => handleClickMenu("DPIB")}>
                  DPIB
                </SideBarItem>
                <SideBarItem onClick={() => handleClickMenu("TRKO")}>
                  TRKO
                </SideBarItem>
                <SideBarItem onClick={() => handleClickMenu("ATPH")}>
                  ATPH
                </SideBarItem>
              </SideBarDropWrapper>
            </SideBar>
            <ContentOverlay display={sideBar} />
            <Content ref={refContent} height={totalHeight}>
              {props.children}
            </Content>
          </ContentWrapper>
          <Footer displaynavigation={false} />
        </>
      )}
    </Wrapper>
  );
}

export default UserLayout;
