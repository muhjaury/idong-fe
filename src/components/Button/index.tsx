import { Btn, Wrapper } from "./_button";

function Button(props: any) {
  return (
    <Wrapper>
      <Btn {...props}>{props.children}</Btn>
    </Wrapper>
  );
}

export default Button;
