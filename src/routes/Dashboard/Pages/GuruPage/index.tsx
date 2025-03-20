import { Button, InputText, Modal } from "@/components";
import { TambahDataGuru } from "@/components/ModalContent";
import { Interface_User } from "@/interface";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Wrapper, WrapperContent, WrapperSearch } from "./_guruPage";
import { fetchGuru } from "./network";

function GuruPage() {
  const [rawData, setRawData] = useState<Interface_User[]>([]);
  const [data, setData] = useState(rawData);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    if (rawData.length === 0) {
      const func = { setRawData };
      fetchGuru(func);
    }
  }, []);

  useEffect(() => {
    setData(rawData);
  }, [rawData]);

  const columns: TableColumn<Interface_User>[] = [
    { name: "Nomor", selector: (row) => row.nomor, sortable: true },
    { name: "Nama", selector: (row) => row.nama, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Aksi", selector: (row) => row.aksi, sortable: true },
  ];

  const handleSearch = (e: any) => {
    const filterData = rawData.filter(
      (row) =>
        row?.nama?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row?.email?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filterData);
  };

  return (
    <>
      <Wrapper>
        <Button onClick={() => setDisplayModal(true)}>Tambah Data Guru</Button>
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
      <Modal
        type="secondary"
        display={displayModal}
        onClose={() => {
          setDisplayModal(false);
          const func = { setRawData };
          fetchGuru(func);
        }}
      >
        <TambahDataGuru />
      </Modal>
    </>
  );
}

export default GuruPage;
