import { useEffect, useState } from "react";
import { Button } from "..";
import {
  ButtonWrapper,
  Nav,
  Wrapper,
  WrapperLeft,
  WrapperRight,
} from "./_header";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  console.log(scrolled);

  return (
    <Wrapper scrolled={scrolled}>
      <WrapperLeft></WrapperLeft>
      <WrapperRight>
        <Nav>Beranda</Nav>
        <Nav>Tentang Kami</Nav>
        <Nav>Program</Nav>
        <ButtonWrapper>
          <Button>Hubungi Kami</Button>
        </ButtonWrapper>
      </WrapperRight>
    </Wrapper>
  );
}

export default Header;
