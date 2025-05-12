import { Footer, Header, Loading, LoadingContent } from "@/components";
import { useWidget } from "@/context";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Content, Wrapper } from "./_coreLayout";

function CoreLayout(props: any) {
  const [initLoading, setInitLoading] = useState<string>("Y");
  const [loading, setLoading] = useState<boolean>(false);

  const { listFetchAPI } = useWidget();

  useEffect(() => {
    setTimeout(() => setInitLoading("N"), 500);
    AOS.init({ duration: 300 });
  }, []);

  useEffect(() => {
    const extractValuesFetchAPIs = Object.values(listFetchAPI);
    if (extractValuesFetchAPIs.some((i: any) => i === true)) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [listFetchAPI]);

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
