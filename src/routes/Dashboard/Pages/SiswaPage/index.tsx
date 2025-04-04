import { Button, InputText, Modal } from "@/components";
import { TambahSiswa } from "@/components/ModalContent";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Wrapper, WrapperContent, WrapperSearch } from "./_siswaPage";
import { fetch } from "./network";

function SiswaPage() {
  const [rawData, setRawData] = useState<any[]>([]);
  const [data, setData] = useState(rawData);
  const [search, setSearch] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (rawData.length === 0) {
      const func = { setDisplayModal, setModalData, setRawData };
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
    { name: "Aksi", selector: (row) => row.aksi, sortable: true },
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
    <>
      <Wrapper>
        <Button onClick={() => setDisplayModal(true)}>Tambah Siswa</Button>
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
      <Modal
        type="secondary"
        display={displayModal}
        onClose={() => {
          setDisplayModal(false);
          setModalData({});
          const func = { setDisplayModal, setModalData, setRawData };
          fetch(func);
        }}
      >
        <TambahSiswa
          data={modalData}
          onClose={() => {
            setDisplayModal(false);
            setModalData({});
          }}
        />
      </Modal>
    </>
  );
}

export default SiswaPage;
