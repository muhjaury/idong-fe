import { Button, Card, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import { useWidget } from "@/context";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import {
  BackButtonWrapper,
  CardDesc,
  CardTitle,
  CardWrapper,
  NewsDesc,
  NewsImage,
  NewsTitle,
  NewsWrapper,
} from "./_portalBerita";
import { fetch } from "./network";

function PortalBerita() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.portalBerita,
  ]);
  const [list, setList] = useState<any>([]);
  const [indexNews, setIndexNews] = useState<string | null>("");

  const { setListFetchAPI } = useWidget();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const index = urlParams.get("i");
    setIndexNews(index);
  }, []);

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

  const handleNewsClick = (idx: number) => {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + `?i=${idx}`
    );
    setIndexNews(idx.toString());
  };

  const handleBackClick = () => {
    window.history.replaceState(null, "", window.location.pathname);
    setIndexNews("");
  };

  return (
    <CoreLayout>
      <PageTitle title="Portal Berita" breadcrumb={breadcrumb} />
      <Section type="secondary">
        {indexNews ? (
          <>
            <BackButtonWrapper>
              <Button height="40px" onClick={handleBackClick}>
                Daftar Berita
              </Button>
            </BackButtonWrapper>
            <NewsImage src={list[indexNews]?.foto} />
            <NewsWrapper>
              <NewsTitle>{list[indexNews]?.judul}</NewsTitle>
              <NewsDesc>{list[indexNews]?.deskripsi}</NewsDesc>
            </NewsWrapper>
          </>
        ) : (
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
                    onClick={() => handleNewsClick(index)}
                  />
                );
              })}
          </CardWrapper>
        )}
      </Section>
    </CoreLayout>
  );
}

export default PortalBerita;
