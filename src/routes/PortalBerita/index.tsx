import { Card, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import { useWidget } from "@/context";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { CardDesc, CardTitle, CardWrapper } from "./_portalBerita";
import { fetch } from "./network";

function PortalBerita() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.portalBerita,
  ]);
  const [list, setList] = useState([]);

  const { setListFetchAPI } = useWidget();

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.portalBerita]);
  }, []);

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchPortalBerita: true };
    });

    const func = { setList, setListFetchAPI };
    fetch(func);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="Portal Berita" breadcrumb={breadcrumb} />
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
                      <CardDesc title={item.deskripsi}>
                        {item.deskripsi}
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

export default PortalBerita;
