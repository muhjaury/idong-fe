import { Button, InputText, Modal } from "@/components";
import { TambahPetaStatusKontak } from "@/components/ModalContent";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import {
  Wrapper,
  WrapperContent,
  WrapperSearch,
} from "./_petaStatusKontakPage";
import { fetch } from "./network";

function PetaStatusKontakPage() {
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
      name: "Lokasi",
      selector: (row) => row.lokasi,
      sortable: true,
    },
    {
      name: "Nomor Telepon",
      selector: (row) => row.nomorTelepon,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Instagram",
      selector: (row) => row.instagram,
      sortable: true,
    },
    {
      name: "Facebook",
      selector: (row) => row.facebook,
      sortable: true,
    },
    {
      name: "Maps",
      selector: (row) => row.maps,
      sortable: true,
    },
    { name: "Aksi", selector: (row) => row.aksi, sortable: true },
  ];

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearch(value);
    const filterData = rawData.filter(
      (row) =>
        row?.lokasi?.toLowerCase().includes(value.toLowerCase()) ||
        row?.nomorTelepon?.toLowerCase().includes(value.toLowerCase()) ||
        row?.email?.toLowerCase().includes(value.toLowerCase()) ||
        row?.instagram?.toLowerCase().includes(value.toLowerCase()) ||
        row?.facebook?.toLowerCase().includes(value.toLowerCase())
    );
    setData(filterData);
  };

  return (
    <>
      <Wrapper>
        {rawData.length === 0 && (
          <Button onClick={() => setDisplayModal(true)}>
            Tambah Peta Status Kontak
          </Button>
        )}
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
        <TambahPetaStatusKontak
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

export default PetaStatusKontakPage;
