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
  SideBarHeader,
  Wrapper,
  WrapperLeft,
  WrapperRight,
} from "./_header";
import SOPPENG from "./../../assets/img/soppeng.png";
import MENU from "./../../assets/svg/menu.svg";
import CLOSE from "./../../assets/img/cancel.png";
import { useRouter } from "next/navigation";
import { urls } from "@/constant/path";

function Header() {
  const [scrolled, setScrolled] = useState<string>("N");
  const [hover, setHover] = useState<string[]>(["N", "N", "N", "N", "N"]);
  const [sideBar, setSideBar] = useState<string>("N");

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

  return (
    <Wrapper scrolled={scrolled}>
      <SideBar display={sideBar}>
        <SideBarHeader>
          <Close src={CLOSE} onClick={() => setSideBar("N")} />
        </SideBarHeader>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
        <div>Tes</div>
      </SideBar>
      <WrapperLeft>
        <Logo src={SOPPENG} />
      </WrapperLeft>
      <WrapperRight>
        <NavWrapper>
          <Nav onMouseEnter={() => handleOnHover(0)}>Beranda</Nav>
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
          <Nav>Profil</Nav>
          <NavDropdownWrapper>
            <NavDropdown></NavDropdown>
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
          <Nav>Jurusan</Nav>
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
