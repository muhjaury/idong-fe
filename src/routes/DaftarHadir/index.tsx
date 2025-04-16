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
} from "./_daftarHadir";
import { fetch } from "./network";

function DaftarHadir() {
  const [breadcrumb, setBreadcrumb] = useState([
    Breadcrumb.home,
    Breadcrumb.daftarHadir,
  ]);
  const [jurusan, setJurusan] = useState("");
  const [kelas, setKelas] = useState("");
  const [tahunAjar, setTahunAjar] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    setBreadcrumb([Breadcrumb.home, Breadcrumb.daftarHadir]);
  }, []);

  const columns: TableColumn<any>[] = [
    { name: "Nomor", selector: (row) => row.nomor, sortable: true },
    {
      name: "Kelas",
      selector: (row) => row.kelas,
      sortable: true,
    },
    {
      name: "Jurusan",
      selector: (row) => row.jurusan,
      sortable: true,
    },
    {
      name: "Tahun Ajar",
      selector: (row) => row.tahunAjar,
      sortable: true,
    },
    {
      name: "File",
      selector: (row) => row.file,
      sortable: true,
    },
  ];

  const handleJurusanChange = (e: any) => {
    const value = e.target.value;
    setJurusan(value);
  };

  const handleKelasChange = (e: any) => {
    const value = e.target.value;
    setKelas(value);
  };

  const handleTahunAjarChange = (e: any) => {
    const value = e.target.value;
    setTahunAjar(value);
  };

  const handleSearch = () => {
    const data = { jurusan, kelas, tahunAjar };
    const func = { setData, setShowTable };
    fetch(data, func);
  };

  return (
    <CoreLayout>
      <PageTitle title="Daftar Hadir" breadcrumb={breadcrumb} />
      <Section type="secondary">
        <Wrapper>
          <WrapperInput>
            <InputText
              placeholder="Jurusan"
              onChange={(e) => handleJurusanChange(e)}
              value={jurusan}
            />
            {jurusan && (
              <InputText
                placeholder="Kelas"
                onChange={(e) => handleKelasChange(e)}
                value={kelas}
              />
            )}
            {jurusan && kelas && (
              <InputText
                placeholder="Tahun Ajar"
                onChange={(e) => handleTahunAjarChange(e)}
                value={tahunAjar}
              />
            )}
            {jurusan && kelas && tahunAjar && (
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

export default DaftarHadir;
