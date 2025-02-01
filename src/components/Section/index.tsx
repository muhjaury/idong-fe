import { Wrapper } from "./_section";

function Section(props: any) {
  return <Wrapper type={props.type}>{props.children}</Wrapper>;
}

export default Section;
