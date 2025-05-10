import { Button, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { Wrapper, WrapperDetails } from "./_kalenderAkademik";
import { fetch } from "./network";

function KalenderAkademik() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.kalenderAkademik,
  ]);
  const [file, setFile] = useState("");
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [view, setView] = useState("desktop");

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.kalenderAkademik]);
  }, []);

  useEffect(() => {
    const func = { setFile };
    fetch(func);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = document.body.clientWidth;
      if (width > 1008) {
        setView("desktop");
      } else {
        setView("mobile");
      }
    };
    window.addEventListener("resize", () => handleResize());
    return () => {
      window.removeEventListener("resize", () => handleResize());
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };

  const handleBackClick = () => {
    if (pageNumber > 1) {
      document.getElementById("top")!.scrollIntoView();
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextClick = () => {
    if (pageNumber < numPages!) {
      document.getElementById("top")!.scrollIntoView();
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <CoreLayout>
      <PageTitle title="Kalender Akademik" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper id="top">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(err) => console.log(err)}
          >
            <Page
              pageNumber={pageNumber}
              width={view === "mobile" ? 320 : 1024}
            />
          </Document>
          {numPages! > 1 && (
            <WrapperDetails>
              <Button
                disabled={pageNumber === 0}
                onClick={() => handleBackClick()}
              >
                Back
              </Button>
              <span>
                Page {pageNumber} of {numPages}
              </span>
              <Button
                disabled={pageNumber > 7}
                onClick={() => handleNextClick()}
              >
                Next
              </Button>
            </WrapperDetails>
          )}
        </Wrapper>
      </Section>
    </CoreLayout>
  );
}

export default KalenderAkademik;
