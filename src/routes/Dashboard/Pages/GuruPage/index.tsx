import { Button, InputText } from "@/components";
import { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import {
  ButtonWrapper,
  Wrapper,
  WrapperContent,
  WrapperSearch,
} from "./_guruPage";

interface DataRow {
  nomor: number;
  nama: string;
  email: string;
  aksi: any;
}

function GuruPage() {
  const columns: TableColumn<DataRow>[] = [
    { name: "Nomor", selector: (row) => row.nomor, sortable: true },
    { name: "Nama", selector: (row) => row.nama },
    { name: "Email", selector: (row) => row.email },
    { name: "Aksi", selector: (row) => row.aksi },
  ];

  const rawData = [
    {
      id: 1,
      nomor: 1,
      nama: "User 1",
      email: "user1@gmail.com",
      aksi: (
        <ButtonWrapper>
          <Button removeshadow="Y">Hapus</Button>
        </ButtonWrapper>
      ),
    },
    {
      id: 2,
      nomor: 2,
      nama: "User 2",
      email: "user2@gmail.com",
      aksi: (
        <ButtonWrapper>
          <Button removeshadow="Y">Hapus</Button>
        </ButtonWrapper>
      ),
    },
    {
      id: 3,
      nomor: 3,
      nama: "User 3",
      email: "user3@gmail.com",
      aksi: (
        <ButtonWrapper>
          <Button removeshadow="Y">Hapus</Button>
        </ButtonWrapper>
      ),
    },
    {
      id: 4,
      nomor: 4,
      nama: "User 4",
      email: "user4@gmail.com",
      aksi: (
        <ButtonWrapper>
          <Button removeshadow="Y">Hapus</Button>
        </ButtonWrapper>
      ),
    },
    {
      id: 5,
      nomor: 5,
      nama: "User 5",
      email: "user5@gmail.com",
      aksi: (
        <ButtonWrapper>
          <Button removeshadow="Y">Hapus</Button>
        </ButtonWrapper>
      ),
    },
    {
      id: 6,
      nomor: 6,
      nama: "User 6",
      email: "user6@gmail.com",
      aksi: (
        <ButtonWrapper>
          <Button removeshadow="Y">Hapus</Button>
        </ButtonWrapper>
      ),
    },
    {
      id: 7,
      nomor: 7,
      nama: "User 7",
      email: "user7@gmail.com",
      aksi: (
        <ButtonWrapper>
          <Button removeshadow="Y">Hapus</Button>
        </ButtonWrapper>
      ),
    },
    {
      id: 8,
      nomor: 8,
      nama: "User 8",
      email: "user8@gmail.com",
      aksi: (
        <ButtonWrapper>
          <Button removeshadow="Y">Hapus</Button>
        </ButtonWrapper>
      ),
    },
    {
      id: 9,
      nomor: 9,
      nama: "User 9",
      email: "user9@gmail.com",
      aksi: (
        <ButtonWrapper>
          <Button removeshadow="Y">Hapus</Button>
        </ButtonWrapper>
      ),
    },
    {
      id: 10,
      nomor: 10,
      nama: "User 10",
      email: "user10@gmail.com",
      aksi: (
        <ButtonWrapper>
          <Button removeshadow="Y">Hapus</Button>
        </ButtonWrapper>
      ),
    },
    {
      id: 11,
      nomor: 11,
      nama: "User 11",
      email: "user11@gmail.com",
      aksi: (
        <ButtonWrapper>
          <Button removeshadow="Y">Hapus</Button>
        </ButtonWrapper>
      ),
    },
  ];

  const [data, setData] = useState(rawData);

  const handleSearch = (e: any) => {
    const filterData = rawData.filter(
      (row) =>
        row.nama.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.email.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filterData);
  };

  return (
    <Wrapper>
      <Button>Tambah Data Guru</Button>
      <WrapperContent>
        <WrapperSearch>
          <InputText
            placeholder="Pencarian"
            onChange={(e: any) => handleSearch(e)}
          />
        </WrapperSearch>
        <DataTable columns={columns} data={data} pagination></DataTable>
      </WrapperContent>
    </Wrapper>
  );
}

export default GuruPage;
