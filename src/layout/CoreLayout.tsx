"use client";

import { Footer, Header } from "@/components";
import { Content, Wrapper } from "./_coreLayout";

function CoreLayout(props: any) {
  return (
    <Wrapper>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Wrapper>
  );
}

export default CoreLayout;
