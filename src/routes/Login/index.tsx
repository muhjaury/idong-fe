import { Button, InputText, Loading, LoadingContent } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SOPPENG from "./../../assets/img/soppeng.png";
import { Card, Logo, Title, Wrapper } from "./_login";
import { verifyCred } from "./network";

function Login() {
  const [initLoading, setInitLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setInitLoading(false), 500);
  }, []);

  const handleUsername = (username: string) => {
    setUsername(username);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username && password) {
      const func = { router };
      verifyCred(func, username, password);
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
            <Button>Login</Button>
          </Card>
        </Wrapper>
      )}
    </>
  );
}

export default Login;
