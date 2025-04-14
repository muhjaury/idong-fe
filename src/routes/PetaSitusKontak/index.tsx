import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { decryptData } from "@/utils/dataManipulation";
import React, { useEffect, useState } from "react";
import {
  DetailTitle,
  DetailValue,
  DetailWrapper,
  InfoWrapper,
  Maps,
  Title,
  Wrapper,
} from "./_pageSitusKontak";
import { fetch } from "./network";

function PetaSitusKontak() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.petaSitusKontak,
  ]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.petaSitusKontak]);
  }, []);

  useEffect(() => {
    const func = { setList };
    fetch(func);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="Peta Situs & Kontak" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper>
          {list.length > 0 &&
            list.map((item: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  <Maps src={item.maps} />
                  <Title>Informasi</Title>
                  <InfoWrapper>
                    <DetailWrapper>
                      <DetailTitle>Alamat</DetailTitle>
                      <DetailValue>{decryptData(item.lokasi)}</DetailValue>
                    </DetailWrapper>
                    <DetailWrapper>
                      <DetailTitle>Nomor Telepon</DetailTitle>
                      <DetailValue>
                        {decryptData(item.nomorTelepon)}
                      </DetailValue>
                    </DetailWrapper>
                    <DetailWrapper>
                      <DetailTitle>Email</DetailTitle>
                      <DetailValue>{decryptData(item.email)}</DetailValue>
                    </DetailWrapper>
                    <DetailWrapper>
                      <DetailTitle>Instagram</DetailTitle>
                      <DetailValue>{decryptData(item.instagram)}</DetailValue>
                    </DetailWrapper>
                    <DetailWrapper>
                      <DetailTitle>Facebook</DetailTitle>
                      <DetailValue>{decryptData(item.facebook)}</DetailValue>
                    </DetailWrapper>
                  </InfoWrapper>
                </React.Fragment>
              );
            })}
        </Wrapper>
      </Section>
    </CoreLayout>
  );
}

export default PetaSitusKontak;
