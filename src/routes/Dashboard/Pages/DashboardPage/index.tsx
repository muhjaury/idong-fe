import { Card } from "@/components";
import { useEffect, useState } from "react";
import { Wrapper, WrapperCard } from "./_dashboardPage";
import { useSelector } from "react-redux";

function DashboardPage() {
  const [username, setUsername] = useState("");

  const dataFromRedux = useSelector((state: any) => state.data);

  useEffect(() => {
    const name = dataFromRedux?.user?.name;
    if (name) {
      setUsername(name);
    }
  }, [dataFromRedux?.user?.name]);

  return (
    <Wrapper>
      <span>
        Selamat Datang,
        <br />
        {username && <b>{username}</b>}
      </span>
      {/* <WrapperCard>
        <Card />
        <Card />
      </WrapperCard>
      <WrapperCard>
        <Card />
        <Card />
      </WrapperCard>
      <WrapperCard>
        <Card />
      </WrapperCard> */}
    </Wrapper>
  );
}

export default DashboardPage;
