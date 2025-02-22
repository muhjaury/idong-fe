import { Input, Wrappper } from "./_inputText";

function InputText(props: any) {
  return (
    <Wrappper>
      <Input {...props} />
    </Wrappper>
  );
}

export default InputText;
