import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";

function ATPH() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.atph,
  ]);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.atph]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="ATPH" breadcrumb={breadcrumb} />
      <Section type="secondary"></Section>
    </CoreLayout>
  );
}

export default ATPH;
