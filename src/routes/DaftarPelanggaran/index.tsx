import { Button, InputText, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import {
  ButtonWrapper,
  Wrapper,
  WrapperContent,
  WrapperInput,
} from "./_daftarPelanggaran";
import { fetch } from "./network";

function DaftarPelanggaran() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.daftarPelanggaran,
  ]);
  const [nis, setNis] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.daftarPelanggaran]);
  }, []);

  const columns: TableColumn<any>[] = [
    { name: "Nomor", selector: (row) => row.nomor, sortable: true },
    {
      name: "NIS",
      selector: (row) => row.nis,
      sortable: true,
    },
    {
      name: "Pelanggaran",
      selector: (row) => row.pelanggaran,
      sortable: true,
    },
  ];

  const handleNisChange = (e: any) => {
    const value = e.target.value;
    setNis(value);
  };

  const handleSearch = () => {
    const data = { nis };
    const func = { setData, setShowTable };
    fetch(data, func);
  };

  return (
    <CoreLayout>
      <PageTitle title="Daftar Pelanggaran" breadcrumb={breadcrumb} />

      <Section type="secondary">
        <Wrapper>
          <WrapperInput>
            <InputText
              placeholder="NIS"
              onChange={(e) => handleNisChange(e)}
              value={nis}
            />
            {nis && (
              <ButtonWrapper>
                <Button onClick={() => handleSearch()}>Cari</Button>
              </ButtonWrapper>
            )}
          </WrapperInput>
          {showTable && (
            <WrapperContent>
              <DataTable columns={columns} data={data} pagination></DataTable>
            </WrapperContent>
          )}
        </Wrapper>
      </Section>
    </CoreLayout>
  );
}

export default DaftarPelanggaran;
