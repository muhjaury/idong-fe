"use client";

import { Button, Content, Section, SvgPreviewer } from "@/components";
import CoreLayout from "@/layout/CoreLayout";
import CIRCLE_BLUE from "./../../assets/svg/circle-blue.svg";
import CIRCLE from "./../../assets/svg/circle.svg";

function Home() {
  return (
    <CoreLayout>
      <Section>
        {/* <SvgPreviewer
          src={CIRCLE_BLUE}
          alt="circle"
          top="-32px"
          right="-200px"
        />
        <SvgPreviewer src={CIRCLE_BLUE} alt="circle" top="80px" right="0" /> */}
      </Section>
      <Section type="secondary">
        {/* <SvgPreviewer src={CIRCLE} alt="circle" top="200" right="0" /> */}
        <Content>
          <Button>Button</Button>
        </Content>
      </Section>
      <Section>
        {/* <SvgPreviewer
          src={CIRCLE_BLUE}
          alt="circle"
          top="-32px"
          right="-200px"
        />
        <SvgPreviewer src={CIRCLE_BLUE} alt="circle" top="80px" right="0" /> */}
      </Section>
      <Section type="secondary">
        {/* <SvgPreviewer src={CIRCLE} alt="circle" top="200" right="0" /> */}
        <Content>
          <Button>Button</Button>
        </Content>
      </Section>
    </CoreLayout>
  );
}

export default Home;
