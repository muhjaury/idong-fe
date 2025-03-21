import { Input, Label, Wrappper } from "./_inputText";

function InputText({
  label = "",
  onChange = (props: any): any => {},
  placeholder = "",
  type = "text",
  value = "",
}) {
  const handleChange = (e: any) => {
    onChange(e);
  };
  return (
    <Wrappper>
      {label && <Label>{label}</Label>}
      <Input
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </Wrappper>
  );
}

export default InputText;
