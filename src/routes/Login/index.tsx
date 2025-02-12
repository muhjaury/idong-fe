import { Loading, LoadingContent } from "@/components";
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
        <LoadingContent />
      ) : (
        <Wrapper>
          {initLoading && <Loading />}
          <Card>
            <Title>Login</Title>
          </Card>
        </Wrapper>
      )}
    </>
  );
}

export default Login;
