import { Loading } from "@/components";
import { useEffect, useState } from "react";
import { Card, Title, Wrapper } from "./_login";

function Login() {
  const [initLoading, setInitLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setInitLoading(false), 500);
  }, []);
  return (
    <>
      {initLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Card>
            <Title>Login</Title>
          </Card>
        </Wrapper>
      )}
    </>
  );
}

export default Login;
