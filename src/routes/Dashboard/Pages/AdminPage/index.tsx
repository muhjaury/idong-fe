import { Button, InputText, Modal } from "@/components";
import { TambahDataAdmin } from "@/components/ModalContent";
import { useWidget } from "@/context";
import { Interface_User } from "@/interface";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Wrapper, WrapperContent, WrapperSearch } from "./_adminPage";
import { fetchAdmin } from "./network";

function AdminPage() {
  const [rawData, setRawData] = useState<Interface_User[]>([]);
  const [data, setData] = useState(rawData);
  const [search, setSearch] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

  const { setLoading } = useWidget();

  useEffect(() => {
    if (rawData.length === 0) {
      setLoading(true);
      const func = { setRawData, setLoading };
      fetchAdmin(func);
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
    const value = e.target.value;
    setSearch(value);
    const filterData = rawData.filter(
      (row) =>
        row?.nama?.toLowerCase().includes(value.toLowerCase()) ||
        row?.email?.toLowerCase().includes(value.toLowerCase())
    );
    setData(filterData);
  };

  return (
    <>
      <Wrapper>
        <Button onClick={() => setDisplayModal(true)}>Tambah Data Admin</Button>
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
          setLoading(true);
          setDisplayModal(false);
          const func = { setRawData, setLoading };
          fetchAdmin(func);
        }}
      >
        <TambahDataAdmin />
      </Modal>
    </>
  );
}

export default AdminPage;
