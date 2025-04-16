import { DisplayFile, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { Wrapper } from "./_TRKO";
import { fetch } from "./network";

function TRKO() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.trko,
  ]);
  const [list, setList] = useState([]);

  useEffect(() => {
    const func = { setList };
    fetch(func);
  }, []);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.trko]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="TRKO" breadcrumb={breadcrumb} />
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

export default TRKO;
