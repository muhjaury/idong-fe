import { Card } from "@/components";
import { useState } from "react";
import { Wrapper, WrapperCard } from "./_dashboardPage";

function DashboardPage() {
  const [username, setUsername] = useState("Admin");

  return (
    <Wrapper>
      <span>
        Selamat Datang,
        <br />
        {username && <b>{username}</b>}
      </span>
      <WrapperCard>
        <Card />
        <Card />
      </WrapperCard>
      <WrapperCard>
        <Card />
        <Card />
      </WrapperCard>
      <WrapperCard>
        <Card />
      </WrapperCard>
    </Wrapper>
  );
}

export default DashboardPage;
