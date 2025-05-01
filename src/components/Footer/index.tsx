import { urls } from "@/constant/path";
import { Interface_Components } from "@/interface";
import { useRouter } from "next/navigation";
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

function Footer({ displaynavigation = true }: Interface_Components) {
  const router = useRouter();

  const handlePetaClick = () => {
    router.push(urls.PETA_SITUS_KONTAK);
  };
  return (
    <>
      {displaynavigation && (
        <WrapperTop>
          <Logo src={SOPPENG} />
          <Content>
            <WrapperColumn>
              <Title>Hubungi Kami</Title>
              <DescriptionWrapper>
                <Description>Lokasi</Description>
                <Description>No. Telp</Description>
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
          <Navigation onClick={() => handlePetaClick()}>
            Peta Situs & Contact
          </Navigation>
        </Content>
      </WrapperBottom>
    </>
  );
}

export default Footer;
