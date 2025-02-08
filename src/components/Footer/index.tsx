import { Content } from "..";
import {
  Copyright,
  Description,
  Logo,
  Navigation,
  Title,
  WrapperBottom,
  WrapperColumn,
  WrapperTop,
} from "./_footer";
import SOPPENG from "./../../assets/img/soppeng.png";

function Footer() {
  return (
    <>
      <WrapperTop>
        <Logo src={SOPPENG} />
        <Content>
          <WrapperColumn>
            <Title>SMKS Karya Teknik Watangsoppeng</Title>
            <div>
              <Description>Lokasi</Description>
              <Description>Nomor Telephone</Description>
              <Description>Email</Description>
              <Description>Instagram</Description>
              <Description>Facebook</Description>
            </div>
          </WrapperColumn>
        </Content>
        <Content>
          <WrapperColumn>
            <Title>Tautan Penting</Title>
            <div>
              <Navigation>Kemendikbud</Navigation>
              <Navigation>PPDB</Navigation>
            </div>
          </WrapperColumn>
        </Content>
      </WrapperTop>
      <WrapperBottom>
        <Content>
          <Copyright>&copy; 2025 SMKS Karya Teknik Watangsoppeng</Copyright>
        </Content>
        <Content>
          <Navigation>Peta Situs & Contact</Navigation>
        </Content>
      </WrapperBottom>
    </>
  );
}

export default Footer;
