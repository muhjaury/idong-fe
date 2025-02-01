"use client";

import { Button, Section } from "@/components";
import CoreLayout from "@/layout/CoreLayout";

function Dashboard() {
  return (
    <CoreLayout>
      <Section type="secondary">
        <p>Paragraph</p>
        <Button>Button</Button>
      </Section>
    </CoreLayout>
  );
}

export default Dashboard;
