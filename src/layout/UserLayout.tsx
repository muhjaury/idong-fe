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
          <SideBarItemWrapper>
            <SideBarItem>User</SideBarItem>
            <SideBarDropdown
              alt="down"
              src={DOWN}
              onClick={() => setSideDrop1(sideDrop1 === "Y" ? "N" : "Y")}
              display={sideDrop1}
            />
          </SideBarItemWrapper>
          <SideBarDropWrapper display={sideDrop1}>
            <SideBarItem>Admin</SideBarItem>
            <SideBarItem>Guru</SideBarItem>
          </SideBarDropWrapper>
          <SideBarItem>Profil Sekolah</SideBarItem>
          <SideBarItem>Sejarah Sekolah</SideBarItem>
          <SideBarItem>Sarana & Prasarana</SideBarItem>
          <SideBarItem>Informasi</SideBarItem>
          <SideBarItem>Kalender Akademik</SideBarItem>
          <SideBarItem>Tenaga Pendidik</SideBarItem>
          <SideBarItem>Tenaga Kependidikan</SideBarItem>
          <SideBarItem>Kelas</SideBarItem>
          <SideBarItem>Siswa</SideBarItem>
          <SideBarItem>Tata Tertib</SideBarItem>
          <SideBarItem>Pelanggaran</SideBarItem>
          <SideBarItem>Arsip</SideBarItem>
          <SideBarItem>Mata Pelajaran</SideBarItem>
          <SideBarItem>Jurusan</SideBarItem>
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
