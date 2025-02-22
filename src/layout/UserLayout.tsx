import { Footer, HeaderUser } from "@/components";
import { Content, Wrapper } from "./_userLayout";

function UserLayout(props: any) {
  return (
    <Wrapper>
      <HeaderUser />
      <Content>{props.children}</Content>
      <Footer displayNavigation={false} />
    </Wrapper>
  );
}

export default UserLayout;
