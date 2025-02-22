"use client";

import { Button, Content, Section } from "@/components";
import UserLayout from "@/layout/UserLayout";

function Dashboard() {
  return (
    <UserLayout>
      <Section type="secondary">
        <Content>
          <Button>Button</Button>
        </Content>
      </Section>
    </UserLayout>
  );
}

export default Dashboard;
