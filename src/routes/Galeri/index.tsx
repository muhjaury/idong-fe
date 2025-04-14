import { Card, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { fetch } from "./network";
import { CardDesc, CardTitle, CardWrapper } from "./_galeri";

function Galeri() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.galeri,
  ]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.galeri]);
  }, []);

  useEffect(() => {
    const func = { setList };
    fetch(func);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="Galeri" breadcrumb={breadcrumb} />
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
                      <CardTitle>{item.judul}</CardTitle>
                      <CardDesc>{item.deskripsi}</CardDesc>
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

export default Galeri;
