import { InputText, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Wrapper, WrapperContent, WrapperSearch } from "./_arsip";
import { fetch } from "./network";

function Arsip() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.arsip,
  ]);
  const [rawData, setRawData] = useState<any[]>([]);
  const [data, setData] = useState(rawData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.arsip]);
  }, []);

  useEffect(() => {
    if (rawData.length === 0) {
      const func = { setRawData };
      fetch(func);
    }
  }, []);

  useEffect(() => {
    setData(rawData);
  }, [rawData]);

  const columns: TableColumn<any>[] = [
    { name: "Nomor", selector: (row) => row.nomor, sortable: true },
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Foto",
      selector: (row) => row.foto,
      sortable: true,
    },
  ];

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearch(value);
    const filterData = rawData.filter((row) =>
      row?.nama?.toLowerCase().includes(value.toLowerCase())
    );
    setData(filterData);
  };

  return (
    <CoreLayout>
      <PageTitle title="Arsip" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper>
          <WrapperContent>
            <WrapperSearch>
              <InputText
                placeholder="Pencarian"
                onChange={(e: any) => handleSearch(e)}
                value={search}
              />
            </WrapperSearch>
            <DataTable columns={columns} data={data} pagination></DataTable>
          </WrapperContent>
        </Wrapper>
      </Section>
    </CoreLayout>
  );
}

export default Arsip;
