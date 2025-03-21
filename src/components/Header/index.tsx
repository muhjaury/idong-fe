import { urls } from "@/constant/path";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "..";
import CLOSE from "./../../assets/img/cancel.png";
import DOWN from "./../../assets/img/down.png";
import SOPPENG from "./../../assets/img/soppeng.png";
import MENU from "./../../assets/svg/menu.svg";
import {
  ButtonWrapper,
  Close,
  Dropdown,
  Logo,
  Menu,
  Nav,
  NavDropdown,
  NavDropdownWrapper,
  NavWrapper,
  SideBar,
  SideBarContent,
  SideBarDropWrapper,
  SideBarDropdown,
  SideBarHeader,
  SideBarItem,
  SideBarItemWrapper,
  SideBarWrapper,
  Wrapper,
  WrapperLeft,
  WrapperRight,
} from "./_header";

function Header() {
  const [scrolled, setScrolled] = useState<string>("N");
  const [hover, setHover] = useState<string[]>(["N", "N", "N", "N"]);
  const [sideBar, setSideBar] = useState<string>("N");
  const [sideDrop1, setSideDrop1] = useState<string>("N");
  const [sideDrop2, setSideDrop2] = useState<string>("N");
  const [sideDrop3, setSideDrop3] = useState<string>("N");
  const [sideDrop4, setSideDrop4] = useState<string>("N");

  const router = useRouter();
  const dataFromRedux = useSelector((state: any) => state.data);

  useEffect(() => {
    const handleStickyScroll = () => {
      if (window.scrollY > 80) {
        setScrolled("Y");
      } else {
        setScrolled("N");
      }
    };
    window.addEventListener("scroll", handleStickyScroll);

    return () => {
      window.removeEventListener("scroll", handleStickyScroll);
    };
  }, []);

  const handleOnHover = (index: number) => {
    const data = hover;
    data[index] = "Y";
    setHover([...data]);
  };

  const handleOffHover = (index: number) => {
    let data = hover;
    data[index] = "N";
    setHover([...data]);
  };

  const handleClickMenu = (url: string) => {
    router.push(url);
  };

  const handleClickLogin = () => {
    if (dataFromRedux?.user?.isLogin) {
      return router.push(urls.DASHBOARD);
    }
    return router.push(urls.LOGIN);
  };

  return (
    <Wrapper scrolled={scrolled}>
      <SideBarWrapper display={sideBar}>
        <SideBar display={sideBar}>
          <SideBarHeader>
            <Close src={CLOSE} onClick={() => setSideBar("N")} />
          </SideBarHeader>
          <SideBarContent>
            <SideBarItemWrapper>
              <SideBarItem onClick={() => handleClickMenu(urls.HOME)}>
                Beranda
              </SideBarItem>
            </SideBarItemWrapper>
            <SideBarItemWrapper
              onClick={() => setSideDrop1(sideDrop1 === "Y" ? "N" : "Y")}
            >
              <SideBarItem>Profil</SideBarItem>
              <SideBarDropdown alt="down" src={DOWN} display={sideDrop1} />
            </SideBarItemWrapper>
            <SideBarDropWrapper display={sideDrop1}>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.SEJARAH);
                }}
              >
                Sejarah
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.VISI_MISI);
                }}
              >
                Visi - Misi
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.STRUKTUR_ORGANISASI);
                }}
              >
                Struktur Organisasi
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.TENAGA_PENDIDIK);
                }}
              >
                Tenaga Pendidik
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.TENAGA_KEPENDIDIKAN);
                }}
              >
                Tenaga Kependidikan
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.KALENDER_AKADEMIK);
                }}
              >
                Kalender Akademik
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.SARANA_PRASARANA);
                }}
              >
                Sarana & Prasarana
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.PETA_SITUS_KONTAK);
                }}
              >
                Peta Situs & Kontak
              </SideBarItem>
            </SideBarDropWrapper>
            <SideBarItemWrapper
              onClick={() => setSideDrop2(sideDrop2 === "Y" ? "N" : "Y")}
            >
              <SideBarItem>Informasi</SideBarItem>
              <SideBarDropdown alt="down" src={DOWN} display={sideDrop2} />
            </SideBarItemWrapper>
            <SideBarDropWrapper display={sideDrop2}>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.PORTAL_BERITA);
                }}
              >
                Portal Berita
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.GALERI);
                }}
              >
                Galeri
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.ARSIP);
                }}
              >
                Arsip
              </SideBarItem>
            </SideBarDropWrapper>
            <SideBarItemWrapper
              onClick={() => setSideDrop3(sideDrop3 === "Y" ? "N" : "Y")}
            >
              <SideBarItem>Kesiswaan</SideBarItem>
              <SideBarDropdown alt="down" src={DOWN} display={sideDrop3} />
            </SideBarItemWrapper>
            <SideBarDropWrapper display={sideDrop3}>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.SISWA);
                }}
              >
                Siswa
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.DAFTAR_HADIR);
                }}
              >
                Daftar Hadir
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.TATA_TERTIB);
                }}
              >
                Tata Tertib
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.DAFTAR_PELANGGARAN);
                }}
              >
                Daftar Pelanggaran
              </SideBarItem>
            </SideBarDropWrapper>
            <SideBarItemWrapper
              onClick={() => setSideDrop4(sideDrop4 === "Y" ? "N" : "Y")}
            >
              <SideBarItem>Jurusan</SideBarItem>
              <SideBarDropdown alt="down" src={DOWN} display={sideDrop4} />
            </SideBarItemWrapper>
            <SideBarDropWrapper display={sideDrop4}>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.TKJ);
                }}
              >
                TKJ
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.TBSM);
                }}
              >
                TBSM
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.DPIB);
                }}
              >
                DPIB
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.TRKO);
                }}
              >
                TRKO
              </SideBarItem>
              <SideBarItem
                onClick={() => {
                  handleClickMenu(urls.ATPH);
                }}
              >
                ATPH
              </SideBarItem>
            </SideBarDropWrapper>
          </SideBarContent>
        </SideBar>
      </SideBarWrapper>
      <WrapperLeft>
        <Logo src={SOPPENG} />
      </WrapperLeft>
      <WrapperRight>
        <NavWrapper>
          <Nav onClick={() => handleClickMenu(urls.HOME)}>Beranda</Nav>
        </NavWrapper>
        <NavWrapper>
          <Nav onMouseEnter={() => handleOnHover(0)}>Profil</Nav>
          <NavDropdownWrapper
            display={hover[0]}
            onMouseLeave={() => handleOffHover(0)}
          >
            <NavDropdown
              display={hover[0]}
              onMouseLeave={() => handleOffHover(0)}
            >
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.SEJARAH);
                }}
              >
                Sejarah
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.VISI_MISI);
                }}
              >
                Visi - Misi
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.STRUKTUR_ORGANISASI);
                }}
              >
                Struktur Organisasi
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.TENAGA_PENDIDIK);
                }}
              >
                Tenaga Pendidik
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.TENAGA_KEPENDIDIKAN);
                }}
              >
                Tenaga Kependidikan
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.KALENDER_AKADEMIK);
                }}
              >
                Kalender Akademik
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.SARANA_PRASARANA);
                }}
              >
                Sarana & Prasarana
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.PETA_SITUS_KONTAK);
                }}
              >
                Peta Situs & Kontak
              </Dropdown>
            </NavDropdown>
          </NavDropdownWrapper>
        </NavWrapper>
        <NavWrapper>
          <Nav onMouseEnter={() => handleOnHover(1)}>Informasi</Nav>
          <NavDropdownWrapper
            display={hover[1]}
            onMouseLeave={() => handleOffHover(1)}
          >
            <NavDropdown
              display={hover[1]}
              onMouseLeave={() => handleOffHover(1)}
            >
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.PORTAL_BERITA);
                }}
              >
                Portal Berita
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.GALERI);
                }}
              >
                Galeri
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.ARSIP);
                }}
              >
                Arsip
              </Dropdown>
            </NavDropdown>
          </NavDropdownWrapper>
        </NavWrapper>
        <NavWrapper>
          <Nav onMouseEnter={() => handleOnHover(2)}>Kesiswaan</Nav>
          <NavDropdownWrapper
            display={hover[2]}
            onMouseLeave={() => handleOffHover(2)}
          >
            <NavDropdown
              display={hover[2]}
              onMouseLeave={() => handleOffHover(2)}
            >
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.SISWA);
                }}
              >
                Siswa
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.DAFTAR_HADIR);
                }}
              >
                Daftar Hadir
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.TATA_TERTIB);
                }}
              >
                Tata Tertib
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.DAFTAR_PELANGGARAN);
                }}
              >
                Daftar Pelanggaran
              </Dropdown>
            </NavDropdown>
          </NavDropdownWrapper>
        </NavWrapper>
        <NavWrapper>
          <Nav onMouseEnter={() => handleOnHover(3)}>Jurusan</Nav>
          <NavDropdownWrapper
            display={hover[3]}
            onMouseLeave={() => handleOffHover(3)}
          >
            <NavDropdown
              display={hover[3]}
              onMouseLeave={() => handleOffHover(3)}
            >
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.TKJ);
                }}
              >
                TKJ
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.TBSM);
                }}
              >
                TBSM
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.DPIB);
                }}
              >
                DPIB
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.TRKO);
                }}
              >
                TRKO
              </Dropdown>
              <Dropdown
                onClick={() => {
                  handleClickMenu(urls.ATPH);
                }}
              >
                ATPH
              </Dropdown>
            </NavDropdown>
          </NavDropdownWrapper>
        </NavWrapper>
        <ButtonWrapper>
          <Button onClick={() => handleClickLogin()}>
            {dataFromRedux?.user?.isLogin ? "Dashboard" : "Login"}
          </Button>
        </ButtonWrapper>
        <Menu src={MENU} onClick={() => setSideBar("Y")} />
      </WrapperRight>
    </Wrapper>
  );
}

export default Header;
