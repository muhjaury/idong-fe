import { DisplayFile, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { Wrapper } from "./_DPIB";
import { fetch } from "./network";

function DPIB() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.dpib,
  ]);
  const [list, setList] = useState([]);

  useEffect(() => {
    const func = { setList };
    fetch(func);
  }, []);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.dpib]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="DPIB" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper>
          {list.length > 0 &&
            list.map((item: any, index: number) => {
              return (
                <DisplayFile
                  key={index}
                  base64={item.file}
                  label={item.deskripsi}
                />
              );
            })}
        </Wrapper>
      </Section>
    </CoreLayout>
  );
}

export default DPIB;
