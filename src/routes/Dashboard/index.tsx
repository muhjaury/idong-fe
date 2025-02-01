"use client";

import { Button, Section } from "@/components";
import CoreLayout from "@/layout/CoreLayout";

function Dashboard() {
  return (
    <CoreLayout>
      <Section>
        <p>Section 1</p>
      </Section>
      <Section type="secondary">
        <p>Section 2</p>
        <Button>Button</Button>
      </Section>
    </CoreLayout>
  );
}

export default Dashboard;
