"use client";

import { Button, Content, Section, SvgPreviewer } from "@/components";
import CoreLayout from "@/layout/CoreLayout";
import CIRCLE from "./../../assets/svg/circle.svg";

function Dashboard() {
  return (
    <CoreLayout>
      <Section>
        <SvgPreviewer src={CIRCLE} alt="circle" top="-32px" right="-200px" />
        <SvgPreviewer src={CIRCLE} alt="circle" top="80px" right="0" />
      </Section>
      <Section type="secondary">
        <SvgPreviewer src={CIRCLE} alt="circle" top="200" right="0" />
        <Content>
          <Button>Button</Button>
        </Content>
      </Section>
    </CoreLayout>
  );
}

export default Dashboard;
