import { Content } from "..";
import SOPPENG from "./../../assets/img/soppeng.png";
import {
  Copyright,
  Description,
  DescriptionWrapper,
  Logo,
  Navigation,
  Title,
  WrapperBottom,
  WrapperColumn,
  WrapperTop,
} from "./_footer";

interface IF_Footer {
  displayNavigation?: boolean;
}

function Footer({ displayNavigation = true }: IF_Footer) {
  return (
    <>
      {displayNavigation && (
        <WrapperTop>
          <Logo src={SOPPENG} />
          <Content>
            <WrapperColumn>
              <Title>SMKS Karya Teknik Watangsoppeng</Title>
              <DescriptionWrapper>
                <Description>Lokasi</Description>
                <Description>Nomor Telephone</Description>
                <Description>Email</Description>
                <Description>Instagram</Description>
                <Description>Facebook</Description>
              </DescriptionWrapper>
            </WrapperColumn>
          </Content>
          <Content>
            <WrapperColumn>
              <Title>Tautan Penting</Title>
              <DescriptionWrapper>
                <Navigation>Kemendikbud</Navigation>
                <Navigation>PPDB</Navigation>
              </DescriptionWrapper>
            </WrapperColumn>
          </Content>
        </WrapperTop>
      )}
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
