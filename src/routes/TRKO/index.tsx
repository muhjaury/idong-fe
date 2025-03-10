import { PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";

function TRKO() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.trko,
  ]);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.trko]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="TRKO" breadcrumb={breadcrumb} />
      <Section type="secondary"></Section>
    </CoreLayout>
  );
}

export default TRKO;
