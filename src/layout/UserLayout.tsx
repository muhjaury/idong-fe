import { Footer, HeaderUser } from "@/components";
import { useEffect, useRef, useState } from "react";
import {
  Content,
  ContentWrapper,
  SideBar,
  SideBarDropWrapper,
  SideBarDropdown,
  SideBarItem,
  SideBarItemWrapper,
  Wrapper,
} from "./_userLayout";
import DOWN from "./../assets/img/down.png";

function UserLayout(props: any) {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [sideBarHeight, setSideBarHeight] = useState<number>(0);
  const [totalHeight, setTotalHeight] = useState<number>(0);
  const [sideDrop1, setSideDrop1] = useState<string>("N");
  const [sideDrop2, setSideDrop2] = useState<string>("N");
  const [sideDrop3, setSideDrop3] = useState<string>("N");
  const [sideDrop4, setSideDrop4] = useState<string>("N");
  const [sideDrop5, setSideDrop5] = useState<string>("N");

  const refContent = useRef<HTMLDivElement>(null);
  const refSideBar = useRef<HTMLDivElement>(null);

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

  return (
    <Wrapper>
      <HeaderUser />
      <ContentWrapper>
        <SideBar ref={refSideBar} height={totalHeight}>
          <SideBarItem>Dashboard</SideBarItem>
          <SideBarItemWrapper
            onClick={() => setSideDrop1(sideDrop1 === "Y" ? "N" : "Y")}
          >
            <SideBarItem>User</SideBarItem>
            <SideBarDropdown alt="down" src={DOWN} display={sideDrop1} />
          </SideBarItemWrapper>
          <SideBarDropWrapper display={sideDrop1}>
            <SideBarItem>Admin</SideBarItem>
            <SideBarItem>Guru</SideBarItem>
          </SideBarDropWrapper>
          <SideBarItemWrapper
            onClick={() => setSideDrop2(sideDrop2 === "Y" ? "N" : "Y")}
          >
            <SideBarItem>Profil</SideBarItem>
            <SideBarDropdown alt="down" src={DOWN} display={sideDrop2} />
          </SideBarItemWrapper>
          <SideBarDropWrapper display={sideDrop2}>
            <SideBarItem>Profil Sekolah</SideBarItem>
            <SideBarItem>Tenaga Pendidik</SideBarItem>
            <SideBarItem>Tenaga Kependidikan</SideBarItem>
            <SideBarItem>Sarana & Prasarana</SideBarItem>
            <SideBarItem>Peta Status - Kontak</SideBarItem>
          </SideBarDropWrapper>
          <SideBarItemWrapper
            onClick={() => setSideDrop3(sideDrop3 === "Y" ? "N" : "Y")}
          >
            <SideBarItem>Informasi</SideBarItem>
            <SideBarDropdown alt="down" src={DOWN} display={sideDrop3} />
          </SideBarItemWrapper>
          <SideBarDropWrapper display={sideDrop3}>
            <SideBarItem>Portal Berita</SideBarItem>
            <SideBarItem>Galeri</SideBarItem>
            <SideBarItem>Arsip</SideBarItem>
          </SideBarDropWrapper>
          <SideBarItemWrapper
            onClick={() => setSideDrop4(sideDrop4 === "Y" ? "N" : "Y")}
          >
            <SideBarItem>Kesiswaan</SideBarItem>
            <SideBarDropdown alt="down" src={DOWN} display={sideDrop4} />
          </SideBarItemWrapper>
          <SideBarDropWrapper display={sideDrop4}>
            <SideBarItem>Siswa</SideBarItem>
            <SideBarItem>Daftar Hadir</SideBarItem>
            <SideBarItem>Tata Tertib</SideBarItem>
            <SideBarItem>Pelanggaran</SideBarItem>
          </SideBarDropWrapper>
          <SideBarItemWrapper
            onClick={() => setSideDrop5(sideDrop5 === "Y" ? "N" : "Y")}
          >
            <SideBarItem>Jurusan</SideBarItem>
            <SideBarDropdown alt="down" src={DOWN} display={sideDrop5} />
          </SideBarItemWrapper>
          <SideBarDropWrapper display={sideDrop5}>
            <SideBarItem>TKJ</SideBarItem>
            <SideBarItem>TBSM</SideBarItem>
            <SideBarItem>DPIB</SideBarItem>
            <SideBarItem>TRKO</SideBarItem>
            <SideBarItem>ATPH</SideBarItem>
          </SideBarDropWrapper>
        </SideBar>
        <Content ref={refContent} height={totalHeight}>
          {props.children}
        </Content>
      </ContentWrapper>
      <Footer displayNavigation={false} />
    </Wrapper>
  );
}

export default UserLayout;
