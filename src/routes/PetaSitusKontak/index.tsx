import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import { useWidget } from "@/context";
import CoreLayout from "@/layout/CoreLayout";
import { decryptData } from "@/utils/dataManipulation";
import React, { useEffect, useState } from "react";
import {
  DetailTitle,
  DetailValue,
  DetailWrapper,
  InfoWrapper,
  LinkValue,
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

  const { setListFetchAPI } = useWidget();

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.petaSitusKontak]);
  }, []);

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchPetaSitusKontak: true };
    });

    const func = { setList, setListFetchAPI };
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
                    {item.instagram &&
                      decryptData(item.instagram).includes("http") && (
                        <DetailWrapper>
                          <DetailTitle>Instagram</DetailTitle>
                          <LinkValue
                            target="_blank"
                            href={decryptData(item.instagram)}
                          >
                            {decryptData(item.instagram)}
                          </LinkValue>
                        </DetailWrapper>
                      )}
                    {item.facebook &&
                      decryptData(item.facebook).includes("http") && (
                        <DetailWrapper>
                          <DetailTitle>Facebook</DetailTitle>
                          <LinkValue
                            target="_blank"
                            href={decryptData(item.facebook)}
                          >
                            {decryptData(item.facebook)}
                          </LinkValue>
                        </DetailWrapper>
                      )}
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
