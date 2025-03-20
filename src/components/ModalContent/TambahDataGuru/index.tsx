import { Button, FieldWrapper, InputText } from "@/components";
import { useEffect, useState } from "react";
import { ButtonWrapper, PromptText, Wrapper } from "./_tambahDataGuru";
import { createGuru } from "./network";

function TambahDataGuru() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
  }, [success]);

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleAddClick = () => {
    if (name && email && password) {
      const data = { name, email, password };
      const func = { setName, setEmail, setPassword, setError, setSuccess };
      createGuru(func, data);
    } else {
      setError("Semua data harus diisi");
    }
  };

  return (
    <Wrapper>
      <FieldWrapper>
        <InputText
          label="Nama"
          value={name}
          onChange={(e: any) => handleNameChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Email"
          value={email}
          onChange={(e: any) => handleEmailChange(e)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <InputText
          label="Password"
          value={password}
          onChange={(e: any) => handlePasswordChange(e)}
        />
      </FieldWrapper>
      <PromptText iserror={error}>{error || success}</PromptText>
      <ButtonWrapper>
        <Button removeshadow="Y">Batal</Button>
        <Button removeshadow="Y" onClick={() => handleAddClick()}>
          Tambahkan
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default TambahDataGuru;
