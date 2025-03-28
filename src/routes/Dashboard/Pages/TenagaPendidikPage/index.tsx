import { Button, Modal } from "@/components";
import { TambahTenagaPendidik } from "@/components/ModalContent";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Wrapper, WrapperContent } from "./_tenagaPendidikPage";
import { fetch } from "./network";

function TenagaPendidikPage() {
  const [rawData, setRawData] = useState<any[]>([]);
  const [data, setData] = useState(rawData);
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

  return (
    <>
      <Wrapper>
        <Button onClick={() => setDisplayModal(true)}>
          Tambah Tenaga Pendidik
        </Button>
        <WrapperContent>
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
        <TambahTenagaPendidik
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

export default TenagaPendidikPage;
