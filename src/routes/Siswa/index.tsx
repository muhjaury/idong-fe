import { InputText, PageTitle, Section } from "@/components";
import { Breadcrumb } from "@/constant/breadcrumb";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Wrapper, WrapperContent, WrapperSearch } from "./_siswa";
import { fetch } from "./network";

function Siswa() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.siswa,
  ]);
  const [rawData, setRawData] = useState<any[]>([]);
  const [data, setData] = useState(rawData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.siswa]);
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
      name: "Kelas",
      selector: (row) => row.kelas,
      sortable: true,
    },
    {
      name: "NIS",
      selector: (row) => row.nis,
      sortable: true,
    },
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Jenis Kelamin",
      selector: (row) => row.jenisKelamin,
      sortable: true,
    },
    {
      name: "Alamat",
      selector: (row) => row.alamat,
      sortable: true,
    },
  ];

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearch(value);
    const filterData = rawData.filter(
      (row) =>
        row?.nis?.toLowerCase().includes(value.toLowerCase()) ||
        row?.nama?.toLowerCase().includes(value.toLowerCase())
    );
    setData(filterData);
  };
  return (
    <CoreLayout>
      <PageTitle title="Siswa" breadcrumb={breadcrumb} />
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

export default Siswa;
