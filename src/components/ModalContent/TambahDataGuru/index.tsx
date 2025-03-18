import { Button, FieldWrapper, InputText } from "@/components";
import { ButtonWrapper, Wrapper } from "./_tambahDataGuru";

function TambahDataGuru() {
  return (
    <Wrapper>
      <FieldWrapper>
        <InputText label="Nama" />
      </FieldWrapper>
      <FieldWrapper>
        <InputText label="Email" />
      </FieldWrapper>
      <FieldWrapper>
        <InputText label="Password" />
      </FieldWrapper>
      <ButtonWrapper>
        <Button removeshadow="Y">Batal</Button>
        <Button removeshadow="Y">Tambahkan</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default TambahDataGuru;
