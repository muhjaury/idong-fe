import { useEffect, useState } from "react";
import { Button } from "..";
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
import SOPPENG from "./../../assets/img/soppeng.png";
import MENU from "./../../assets/svg/menu.svg";
import CLOSE from "./../../assets/img/cancel.png";
import DOWN from "./../../assets/img/down.png";
import { useRouter } from "next/navigation";
import { urls } from "@/constant/path";

function Header() {
  const [scrolled, setScrolled] = useState<string>("N");
  const [hover, setHover] = useState<string[]>(["N", "N", "N", "N", "N"]);
  const [sideBar, setSideBar] = useState<string>("N");
  const [sideDrop1, setSideDrop1] = useState<string>("N");
  const [sideDrop2, setSideDrop2] = useState<string>("N");

  const router = useRouter();

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

  const handleClickMenu = (url: string) => {
    router.push(url);
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
              <SideBarItem>Profil</SideBarItem>
              <SideBarDropdown
                alt="down"
                src={DOWN}
                onClick={() => setSideDrop1(sideDrop1 === "Y" ? "N" : "Y")}
                display={sideDrop1}
              />
            </SideBarItemWrapper>
            <SideBarDropWrapper display={sideDrop1}>
              <SideBarItem>Menu 1</SideBarItem>
              <SideBarItem>Menu 2</SideBarItem>
              <SideBarItem>Menu 3</SideBarItem>
            </SideBarDropWrapper>
            <SideBarItemWrapper>
              <SideBarItem>Informasi</SideBarItem>
              <SideBarDropdown
                alt="down"
                src={DOWN}
                onClick={() => setSideDrop2(sideDrop2 === "Y" ? "N" : "Y")}
                display={sideDrop2}
              />
            </SideBarItemWrapper>
            <SideBarDropWrapper display={sideDrop2}>
              <SideBarItem>Menu 1</SideBarItem>
              <SideBarItem>Menu 2</SideBarItem>
              <SideBarItem>Menu 3</SideBarItem>
            </SideBarDropWrapper>
            <SideBarItemWrapper>
              <SideBarItem>Kesiswaan</SideBarItem>
            </SideBarItemWrapper>
            <SideBarItemWrapper>
              <SideBarItem>Jurusan</SideBarItem>
            </SideBarItemWrapper>
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
              <Dropdown>Menu 1</Dropdown>
              <Dropdown>Menu 2</Dropdown>
              <Dropdown>Menu 3</Dropdown>
            </NavDropdown>
          </NavDropdownWrapper>
        </NavWrapper>
        <NavWrapper>
          <Nav onMouseEnter={() => handleOnHover(2)}>Informasi</Nav>
          <NavDropdownWrapper
            display={hover[2]}
            onMouseLeave={() => handleOffHover(2)}
          >
            <NavDropdown
              display={hover[2]}
              onMouseLeave={() => handleOffHover(2)}
            >
              <Dropdown>Menu 1</Dropdown>
              <Dropdown>Menu 2</Dropdown>
              <Dropdown>Menu 3</Dropdown>
            </NavDropdown>
          </NavDropdownWrapper>
        </NavWrapper>
        <NavWrapper>
          <Nav>Kesiswaan</Nav>
        </NavWrapper>
        <NavWrapper>
          <Nav onClick={() => handleClickMenu(urls.JURUSAN)}>Jurusan</Nav>
        </NavWrapper>
        <ButtonWrapper>
          <Button onClick={() => router.push(urls.LOGIN)}>Login</Button>
        </ButtonWrapper>
        <Menu src={MENU} onClick={() => setSideBar("Y")} />
      </WrapperRight>
    </Wrapper>
  );
}

export default Header;
