import { Wrapper } from "./_section";

type T_Section = {
  children?: any;
  type?: string;
};

function Section({ type = "", children = "" }: T_Section) {
  return <Wrapper type={type}>{children}</Wrapper>;
}

export default Section;
