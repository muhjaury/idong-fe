"use client";

import UserLayout from "@/layout/UserLayout";
import { DashboardPage } from "./Pages";
import { Wrapper } from "./_dasboard";

function Dashboard() {
  return (
    <UserLayout>
      <Wrapper>
        <DashboardPage />
      </Wrapper>
    </UserLayout>
  );
}

export default Dashboard;
