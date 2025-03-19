import { Button, InputText, Loading, LoadingContent } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SOPPENG from "./../../assets/img/soppeng.png";
import { Card, ErrorText, Logo, Title, Wrapper } from "./_login";
import { verifyCred } from "./network";

function Login() {
  const [initLoading, setInitLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setInitLoading(false), 500);
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  const handleUsername = (username: string) => {
    setUsername(username);
    setError("");
  };

  const handlePassword = (password: string) => {
    setPassword(password);
    setError("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username && password) {
      const func = { router, setError };
      verifyCred(func, username, password);
    } else {
      setError("Invalid Username or Password");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      {initLoading ? (
        <LoadingContent />
      ) : (
        <Wrapper>
          {initLoading && <Loading />}
          <Logo src={SOPPENG} />
          <Title>SMKS Karya Teknik Watansoppeng</Title>
          <Card onSubmit={(e) => handleSubmit(e)}>
            <InputText
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e: any) => handleUsername(e.target.value)}
            />
            <InputText
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: any) => handlePassword(e.target.value)}
            />
            {error && <ErrorText>{error}</ErrorText>}
            <Button>Login</Button>
          </Card>
        </Wrapper>
      )}
    </>
  );
}

export default Login;
