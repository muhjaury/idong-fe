import { useEffect, useState } from "react";
import { Wrapper, WrapperContent } from "./_profilSekolahPage";
import DataTable, { TableColumn } from "react-data-table-component";
import { Button, Modal } from "@/components";
import { TambahProfilSekolah } from "@/components/ModalContent";

function ProfilSekolahPage() {
  const [rawData, setRawData] = useState<any[]>([]);
  const [data, setData] = useState(rawData);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    if (rawData.length === 0) {
      const func = { setRawData };
      // fetchGuru(func);
    }
  }, []);

  useEffect(() => {
    setData(rawData);
  }, [rawData]);

  const columns: TableColumn<any>[] = [
    { name: "Nomor", selector: (row) => row.nomor, sortable: true },
    { name: "Nama", selector: (row) => row.nama, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Aksi", selector: (row) => row.aksi, sortable: true },
  ];

  return (
    <>
      <Wrapper>
        <Button onClick={() => setDisplayModal(true)}>
          Tambah Profil Sekolah
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
          const func = { setRawData };
          // fetchGuru(func);
        }}
      >
        <TambahProfilSekolah onClose={() => setDisplayModal(false)} />
      </Modal>
    </>
  );
}

export default ProfilSekolahPage;
