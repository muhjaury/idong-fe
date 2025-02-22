import { Footer, HeaderUser } from "@/components";
import { useEffect, useRef, useState } from "react";
import {
  Content,
  ContentWrapper,
  SideBar,
  SideBarItem,
  Wrapper,
} from "./_userLayout";

function UserLayout(props: any) {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [sideBarHeight, setSideBarHeight] = useState<number>(0);
  const [totalHeight, setTotalHeight] = useState<number>(0);

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
          <SideBarItem>User</SideBarItem>
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
