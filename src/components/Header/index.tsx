import { useEffect, useState } from "react";
import { Button } from "..";
import {
  ButtonWrapper,
  Logo,
  Menu,
  Nav,
  Wrapper,
  WrapperLeft,
  WrapperRight,
} from "./_header";
import SOPPENG from "./../../assets/img/soppeng.png";
import MENU from "./../../assets/svg/menu.svg";

function Header() {
  const [scrolled, setScrolled] = useState("false");

  useEffect(() => {
    const handleStickyScroll = () => {
      if (window.scrollY > 80) {
        setScrolled("true");
      } else {
        setScrolled("false");
      }
    };
    window.addEventListener("scroll", handleStickyScroll);

    return () => {
      window.removeEventListener("scroll", handleStickyScroll);
    };
  }, []);

  return (
    <Wrapper scrolled={scrolled}>
      <WrapperLeft>
        <Logo src={SOPPENG} />
      </WrapperLeft>
      <WrapperRight>
        <Nav>Beranda</Nav>
        <Nav>Profil</Nav>
        <Nav>Informasi</Nav>
        <Nav>Kesiswaan</Nav>
        <Nav>Jurusan</Nav>
        <ButtonWrapper>
          <Button>Login</Button>
        </ButtonWrapper>
        <Menu src={MENU} />
      </WrapperRight>
    </Wrapper>
  );
}

export default Header;
