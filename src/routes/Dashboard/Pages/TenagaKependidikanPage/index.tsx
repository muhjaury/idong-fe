import { Button, InputText, Modal } from "@/components";
import { TambahTenagaKependidikan } from "@/components/ModalContent";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import {
  Wrapper,
  WrapperContent,
  WrapperSearch,
} from "./_tenagaKependidikanPage";
import { fetch } from "./network";

function TenagaKependidikanPage() {
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
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Deskripsi",
      selector: (row) => row.deskripsi,
      sortable: true,
    },
    {
      name: "Foto",
      selector: (row) => row.foto,
      sortable: true,
    },
    { name: "Aksi", selector: (row) => row.aksi, sortable: true },
  ];

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearch(value);
    const filterData = rawData.filter(
      (row) =>
        row?.nama?.toLowerCase().includes(value.toLowerCase()) ||
        row?.deskripsi?.toLowerCase().includes(value.toLowerCase())
    );
    setData(filterData);
  };

  return (
    <>
      <Wrapper>
        <Button onClick={() => setDisplayModal(true)}>
          Tambah Tenaga Kependidikan
        </Button>
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
        <TambahTenagaKependidikan
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

export default TenagaKependidikanPage;
