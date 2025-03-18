import { Input, Label, Wrappper } from "./_inputText";

function InputText(props: any) {
  return (
    <Wrappper>
      {props.label && <Label>{props.label}</Label>}
      <Input {...props} />
    </Wrappper>
  );
}

export default InputText;
