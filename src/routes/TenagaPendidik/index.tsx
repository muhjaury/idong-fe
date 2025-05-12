import { Card, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import { useWidget } from "@/context";
import CoreLayout from "@/layout/CoreLayout";
import { decryptData } from "@/utils/dataManipulation";
import { useEffect, useState } from "react";
import { CardDesc, CardTitle, CardWrapper } from "./_tenagaPendidik";
import { fetch } from "./network";

function TenagaPendidik() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.tenagaPendidik,
  ]);
  const [list, setList] = useState([]);

  const { setListFetchAPI } = useWidget();

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.tenagaPendidik]);
  }, []);

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchTenagaPendidik: true };
    });

    const func = { setList, setListFetchAPI };
    fetch(func);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="Tenaga Pendidik" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <CardWrapper>
          {list.length > 0 &&
            list.map((item: any, index: number) => {
              return (
                <Card
                  key={index}
                  image={item.foto}
                  contentBottom={
                    <>
                      <CardTitle>{decryptData(item.nama)}</CardTitle>
                      <CardDesc title={decryptData(item.deskripsi)}>
                        {decryptData(item.deskripsi)}
                      </CardDesc>
                    </>
                  }
                />
              );
            })}
        </CardWrapper>
      </Section>
    </CoreLayout>
  );
}

export default TenagaPendidik;
