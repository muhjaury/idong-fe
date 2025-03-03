import { PageTitle } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";

function Sejarah() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.sejarah,
  ]);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.sejarah]);
  }, []);

  return (
    <CoreLayout>
      <PageTitle title="Sejarah" breadcrumb={breadcrumb} />
    </CoreLayout>
  );
}

export default Sejarah;
