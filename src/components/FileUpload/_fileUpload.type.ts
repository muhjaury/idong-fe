export type FileUploadType = {
  label: string;
  multiple?: boolean;
  onChange: (props: any) => any;
  value: any[];
  accept?: "all" | "img" | "pdf";
};
