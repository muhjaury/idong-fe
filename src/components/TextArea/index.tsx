import { Input, Label, Wrappper } from "./_textArea";

function TextArea({
  label = "",
  onChange = (props: any): any => {},
  value = "",
}) {
  const handleChange = (e: any) => {
    onChange(e);
  };

  return (
    <Wrappper>
      {label && <Label>{label}</Label>}
      <Input rows={10} onChange={handleChange} value={value} />
    </Wrappper>
  );
}

export default TextArea;
