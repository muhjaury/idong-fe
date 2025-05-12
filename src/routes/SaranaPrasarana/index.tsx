import { Card, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import { useWidget } from "@/context";
import CoreLayout from "@/layout/CoreLayout";
import { decryptData } from "@/utils/dataManipulation";
import { useEffect, useState } from "react";
import { CardTitle, CardWrapper } from "./_saranaPrasarana";
import { fetch } from "./network";

function SaranaPrasarana() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.saranaPrasarana,
  ]);
  const [list, setList] = useState([]);

  const { setListFetchAPI } = useWidget();

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.saranaPrasarana]);
  }, []);

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchSaranaPrasarana: true };
    });

    const func = { setList, setListFetchAPI };
    fetch(func);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="Sarana & Prasarana" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <CardWrapper>
          {list.length > 0 &&
            list.map((item: any, index: number) => {
              return (
                <Card
                  key={index}
                  image={item.foto}
                  contentBottom={
                    <CardTitle>{decryptData(item.nama)}</CardTitle>
                  }
                />
              );
            })}
        </CardWrapper>
      </Section>
    </CoreLayout>
  );
}

export default SaranaPrasarana;
