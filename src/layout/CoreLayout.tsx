"use client";

import { Footer, Header, Loading } from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Content, Wrapper } from "./_coreLayout";

function CoreLayout(props: any) {
  const [loading, setLoading] = useState("Y");

  useEffect(() => {
    setTimeout(() => setLoading("N"), 1500);
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Wrapper loading={loading}>
      {loading === "Y" ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Content>{props.children}</Content>
          <Footer />
        </>
      )}
    </Wrapper>
  );
}

export default CoreLayout;
