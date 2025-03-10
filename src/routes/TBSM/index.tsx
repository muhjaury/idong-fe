import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";

function TBSM() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.tbsm,
  ]);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.tbsm]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="TBSM" breadcrumb={breadcrumb} />
      <Section type="secondary"></Section>
    </CoreLayout>
  );
}

export default TBSM;
