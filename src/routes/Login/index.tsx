import { Button, InputText, Loading, LoadingContent } from "@/components";
import { urls } from "@/constant/path";
import { useWidget } from "@/context";
import { ADD_USER_DATA } from "@/redux/slices/dataSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SOPPENG from "./../../assets/img/soppeng.png";
import { Card, ErrorText, Logo, Title, Wrapper } from "./_login";
import { verifyCred } from "./network";

function Login() {
  const [initLoading, setInitLoading] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const dispatch = useDispatch();
  const dataFromRedux = useSelector((state: any) => state.data);
  const { listFetchAPI, setListFetchAPI } = useWidget();

  useEffect(() => {
    setTimeout(() => setInitLoading(false), 500);
  }, []);

  useEffect(() => {
    const extractValuesFetchAPIs = Object.values(listFetchAPI);
    if (extractValuesFetchAPIs.some((i: any) => i === true)) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [listFetchAPI]);

  useEffect(() => {
    if (dataFromRedux?.user?.isLogin) {
      router.push(urls.DASHBOARD);
    }
  }, [dataFromRedux?.user?.isLogin]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  const handleEmail = (email: string) => {
    setEmail(email);
    setError("");
  };

  const handlePassword = (password: string) => {
    setPassword(password);
    setError("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setListFetchAPI((prev: any) => {
      return { ...prev, verifyCred: true };
    });
    if (email && password) {
      const func = {
        setListFetchAPI,
        router,
        setError,
        dispatch,
        ADD_USER_DATA,
      };
      verifyCred(func, email, password);
    } else {
      setError("Invalid Email or Password");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      {initLoading ? (
        <LoadingContent />
      ) : (
        <Wrapper>
          {loading && <Loading />}
          <Logo src={SOPPENG} />
          <Title>SMKS Karya Teknik Watansoppeng</Title>
          <Card onSubmit={(e) => handleSubmit(e)}>
            <InputText
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e: any) => handleEmail(e.target.value)}
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
