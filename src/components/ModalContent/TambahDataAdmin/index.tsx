import { Button, FieldWrapper, InputText } from "@/components";
import { useWidget } from "@/context";
import { useEffect, useState } from "react";
import { ButtonWrapper, PromptText, Wrapper } from "./_tambahDataAdmin";
import { createAdmin } from "./network";

function TambahDataAdmin(props: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { setLoading } = useWidget();

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
      setLoading(true);
      const data = { name, email, password };
      const func = {
        setName,
        setEmail,
        setPassword,
        setError,
        setSuccess,
        setLoading,
      };
      createAdmin(func, data);
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
        <Button removeshadow="Y" onClick={() => props.onClose()}>
          Batal
        </Button>
        <Button removeshadow="Y" onClick={() => handleAddClick()}>
          Tambahkan
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default TambahDataAdmin;
