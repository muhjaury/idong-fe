import { Footer, Header, Loading, LoadingContent } from "@/components";
import { useWidget } from "@/context";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Content, Wrapper } from "./_coreLayout";

function CoreLayout(props: any) {
  const [initLoading, setInitLoading] = useState<string>("Y");

  const { loading } = useWidget();

  useEffect(() => {
    setTimeout(() => setInitLoading("N"), 1500);
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Wrapper loading={initLoading}>
      {initLoading === "Y" ? (
        <LoadingContent />
      ) : (
        <>
          {loading && <Loading />}
          <Header />
          <Content>{props.children}</Content>
          <Footer />
        </>
      )}
    </Wrapper>
  );
}

export default CoreLayout;
