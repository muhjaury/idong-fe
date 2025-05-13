import { urls } from "@/constant/path";
import { useWidget } from "@/context";
import { Interface_Components } from "@/interface";
import { decryptData } from "@/utils/dataManipulation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Content } from "..";
import FB from "./../../assets/img/fb.png";
import IG from "./../../assets/img/ig.png";
import SOPPENG from "./../../assets/img/soppeng.png";
import {
  Copyright,
  Description,
  DescriptionWrapper,
  Logo,
  Navigation,
  SocialMediaLogo,
  SocialMediaWrapper,
  Title,
  WrapperBottom,
  WrapperColumn,
  WrapperTop,
} from "./_footer";
import { fetch } from "./network";

function Footer({ displaynavigation = true }: Interface_Components) {
  const [list, setList] = useState<any>([]);

  const router = useRouter();
  const { footerData, setListFetchAPI, setFooterData } = useWidget();

  useEffect(() => {
    if (displaynavigation && footerData.length === 0) {
      setListFetchAPI((prev: any) => {
        return { ...prev, fetchFooter: true };
      });
      const func = { setList, setListFetchAPI, setFooterData };
      fetch(func);
    }
  }, [displaynavigation, footerData]);

  useEffect(() => {
    if (footerData.length > 0) {
      setList(footerData);
    }
  }, [footerData]);

  const handlePetaClick = () => {
    router.push(urls.PETA_SITUS_KONTAK);
  };

  const handleSocialMediaClick = (url: string) => {
    window.open(url);
  };

  return (
    <>
      {displaynavigation && (
        <WrapperTop>
          <Content>
            <WrapperColumn>
              <Logo src={SOPPENG} />
              <SocialMediaWrapper>
                {list[0]?.facebook &&
                  decryptData(list[0].facebook).includes("http") && (
                    <SocialMediaLogo
                      src={FB}
                      onClick={() =>
                        handleSocialMediaClick(decryptData(list[0].facebook))
                      }
                    />
                  )}
                {list[0]?.instagram &&
                  decryptData(list[0].instagram).includes("http") && (
                    <SocialMediaLogo
                      src={IG}
                      onClick={() =>
                        handleSocialMediaClick(decryptData(list[0].instagram))
                      }
                    />
                  )}
              </SocialMediaWrapper>
            </WrapperColumn>
          </Content>
          <Content>
            <WrapperColumn>
              <Title>Hubungi Kami</Title>
              <DescriptionWrapper>
                {list[0]?.lokasi && (
                  <Description>{decryptData(list[0].lokasi)}</Description>
                )}
                {list[0]?.nomorTelepon && (
                  <Description>{decryptData(list[0].nomorTelepon)}</Description>
                )}
                {list[0]?.email && (
                  <Description>{decryptData(list[0].email)}</Description>
                )}
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
