import { Button, DisplayFile, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Wrapper, WrapperDetails, WrapperDisplayFile } from "./_tataTertib";
import { fetch } from "./network";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function TataTertib() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.tataTertib,
  ]);
  const [list, setList] = useState([]);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [view, setView] = useState("desktop");

  useEffect(() => {
    const func = { setList };
    fetch(func);
  }, []);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.tataTertib]);
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
    setPageNumber(pageNumber - 1);
  };

  const handleNextClick = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <CoreLayout>
      <PageTitle title="Tata Tertib" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper>
          {list.length > 0 &&
            list.map((item: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  <WrapperDisplayFile>
                    <DisplayFile base64={item.file} label="Lihat Tata Tertib" />
                  </WrapperDisplayFile>
                  <Document
                    file={item.file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={(err) => console.log(err)}
                  >
                    <Page
                      pageNumber={pageNumber}
                      width={view === "mobile" ? 320 : 1024}
                    />
                  </Document>
                  <WrapperDetails>
                    <Button
                      disabled={pageNumber === 1}
                      onClick={() => handleBackClick()}
                    >
                      Back
                    </Button>
                    <span>
                      Page {pageNumber} of {numPages}
                    </span>
                    <Button
                      disabled={pageNumber === numPages}
                      onClick={() => handleNextClick()}
                    >
                      Next
                    </Button>
                  </WrapperDetails>
                </React.Fragment>
              );
            })}
        </Wrapper>
      </Section>
    </CoreLayout>
  );
}

export default TataTertib;
