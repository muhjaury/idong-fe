import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";

function DPIB() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.dpib,
  ]);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.dpib]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="DPIB" breadcrumb={breadcrumb} />
      <Section type="secondary"></Section>
    </CoreLayout>
  );
}

export default DPIB;
