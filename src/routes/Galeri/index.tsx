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
  GalleryDesc,
  GalleryImage,
  GalleryTitle,
  GalleryWrapper,
} from "./_galeri";
import { fetch } from "./network";

function Galeri() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.galeri,
  ]);
  const [list, setList] = useState<any>([]);
  const [indexGallery, setIndexGallery] = useState<string | null>("");

  const { setListFetchAPI } = useWidget();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const index = urlParams.get("i");
    setIndexGallery(index);
  }, []);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.galeri]);
  }, []);

  useEffect(() => {
    setListFetchAPI((prev: any) => {
      return { ...prev, fetchGaleri: true };
    });

    const func = { setList, setListFetchAPI };
    fetch(func);
  }, []);

  const handleGalleryClick = (idx: number) => {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + `?i=${idx}`
    );
    setIndexGallery(idx.toString());
  };

  const handleBackClick = () => {
    window.history.replaceState(null, "", window.location.pathname);
    setIndexGallery("");
  };

  return (
    <CoreLayout>
      <PageTitle title="Galeri" breadcrumb={breadcrumb} />
      <Section type="secondary">
        {indexGallery ? (
          <>
            <BackButtonWrapper>
              <Button height="40px" onClick={handleBackClick}>
                Daftar Galeri
              </Button>
            </BackButtonWrapper>
            <GalleryImage src={list[indexGallery]?.foto} />
            <GalleryWrapper>
              <GalleryTitle>{list[indexGallery]?.judul}</GalleryTitle>
              <GalleryDesc>{list[indexGallery]?.deskripsi}</GalleryDesc>
            </GalleryWrapper>
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
                    onClick={() => handleGalleryClick(index)}
                  />
                );
              })}
          </CardWrapper>
        )}
      </Section>
    </CoreLayout>
  );
}

export default Galeri;
