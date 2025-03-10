import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";

function TKJ() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.tkj,
  ]);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.tkj]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="TKJ" breadcrumb={breadcrumb} />
      <Section type="secondary"></Section>
    </CoreLayout>
  );
}

export default TKJ;
