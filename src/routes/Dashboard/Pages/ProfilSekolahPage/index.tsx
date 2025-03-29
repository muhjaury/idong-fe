import { Button, Modal } from "@/components";
import { TambahProfilSekolah } from "@/components/ModalContent";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Wrapper, WrapperContent } from "./_profilSekolahPage";
import { fetchSchoolProfile } from "./network";

function ProfilSekolahPage() {
  const [rawData, setRawData] = useState<any[]>([]);
  const [data, setData] = useState(rawData);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (rawData.length === 0) {
      const func = { setDisplayModal, setModalData, setRawData };
      fetchSchoolProfile(func);
    }
  }, []);

  useEffect(() => {
    setData(rawData);
  }, [rawData]);

  const columns: TableColumn<any>[] = [
    { name: "Nomor", selector: (row) => row.nomor, sortable: true },
    {
      name: "Nama Kepala Sekolah",
      selector: (row) => row.namaKepalaSekolah,
      sortable: true,
    },
    {
      name: "Foto Kepala Sekolah",
      selector: (row) => row.fotoKepalaSekolah,
      sortable: true,
    },
    {
      name: "Sambutan Kepala Sekolah",
      selector: (row) => row.sambutanKepalaSekolah,
      sortable: true,
    },
    { name: "Visi-Misi", selector: (row) => row.visiMisi, sortable: true },
    {
      name: "Struktur Organisasi",
      selector: (row) => row.strukturOrganisasi,
      sortable: true,
    },
    {
      name: "Kalender Akademik",
      selector: (row) => row.kalenderAkademik,
      sortable: true,
    },
    { name: "Aksi", selector: (row) => row.aksi, sortable: true },
  ];

  return (
    <>
      <Wrapper>
        {rawData.length === 0 && (
          <Button onClick={() => setDisplayModal(true)}>
            Tambah Profil Sekolah
          </Button>
        )}
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
          fetchSchoolProfile(func);
        }}
      >
        <TambahProfilSekolah
          data={modalData}
          onClose={() => {
            setDisplayModal(false);
            setModalData({});
            const func = { setDisplayModal, setModalData, setRawData };
            fetchSchoolProfile(func);
          }}
        />
      </Modal>
    </>
  );
}

export default ProfilSekolahPage;
