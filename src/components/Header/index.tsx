import { Button } from "..";
import {
  ButtonWrapper,
  Nav,
  Wrapper,
  WrapperLeft,
  WrapperRight,
} from "./_header";

function Header() {
  return (
    <Wrapper>
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
