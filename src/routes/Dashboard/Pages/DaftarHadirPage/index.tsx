import { Button, InputText, Modal } from "@/components";
import { TambahDaftarHadir } from "@/components/ModalContent";
import { useWidget } from "@/context";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Wrapper, WrapperContent, WrapperSearch } from "./_daftarHadirPage";
import { fetch } from "./network";

function DaftarHadirPage() {
  const [rawData, setRawData] = useState<any[]>([]);
  const [data, setData] = useState(rawData);
  const [search, setSearch] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const { setLoading } = useWidget();

  useEffect(() => {
    setLoading(true);

    if (rawData.length === 0) {
      const func = { setDisplayModal, setModalData, setRawData, setLoading };
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
    { name: "Aksi", selector: (row) => row.aksi, sortable: true },
  ];

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearch(value);
    const filterData = rawData.filter(
      (row) =>
        row?.kelas?.toLowerCase().includes(value.toLowerCase()) ||
        row?.jurusan?.toLowerCase().includes(value.toLowerCase()) ||
        row?.tahunAjar?.toLowerCase().includes(value.toLowerCase())
    );
    setData(filterData);
  };

  return (
    <>
      <Wrapper>
        <Button onClick={() => setDisplayModal(true)}>
          Tambah Daftar Hadir
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
          setLoading(true);

          setDisplayModal(false);
          setModalData({});
          const func = {
            setDisplayModal,
            setModalData,
            setRawData,
            setLoading,
          };
          fetch(func);
        }}
      >
        <TambahDaftarHadir
          data={modalData}
          onClose={() => {
            setLoading(true);

            setDisplayModal(false);
            setModalData({});
            const func = {
              setDisplayModal,
              setModalData,
              setRawData,
              setLoading,
            };
            fetch(func);
          }}
        />
      </Modal>
    </>
  );
}

export default DaftarHadirPage;
