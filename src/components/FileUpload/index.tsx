import { Interface_File } from "@/interface";
import { useEffect, useState } from "react";
import CLOSE from "./../../assets/img/cancel-black.png";
import {
  ButtonLabel,
  ButtonWrapper,
  Close,
  FileLabel,
  FileWrapper,
  FilesWrapper,
  Input,
  Label,
  Wrapper,
} from "./_fileUpload";

function FileUpload({
  label = "",
  multiple = false,
  onChange = (props: any): any => props,
  value = [],
}) {
  const [files, setFiles] = useState<Interface_File[]>([]);

  useEffect(() => {
    setFiles(value);
  }, [value]);

  const handleFileChange = async (e: any, existingFile: Interface_File[]) => {
    const files = e.target.files;
    if (files.length > 0) {
      let initialData: any = Array.from(files).map(
        (item: any, index: number) => {
          return new Promise((resolve) => {
            let reader = new FileReader();
            reader.readAsArrayBuffer(item);
            reader.onload = function (i: any) {
              const arrayBuffer = i.target.result;
              resolve({
                id: index,
                originalFile: item,
                size: item.size,
                type: item.type,
                name: item.name,
                blob: new Blob([item], { type: item.type }),
                value: arrayBuffer,
                objectURL: URL.createObjectURL(item),
              });
            };
          });
        }
      );
      initialData = await Promise.all(initialData).then((res: any) => res);

      let initialDataWithBase64: any = Array.from(initialData).map(
        (item: any) => {
          return new Promise((resolve) => {
            let reader = new FileReader();
            reader.readAsDataURL(item.blob);
            reader.onload = function (i: any) {
              const base64data = reader.result;
              resolve({
                ...item,
                base64: base64data,
              });
            };
          });
        }
      );
      initialDataWithBase64 = await Promise.all(initialDataWithBase64).then(
        (res: any) => res
      );

      if (multiple) {
        let multipleData = [...existingFile, ...initialDataWithBase64];
        multipleData = multipleData.map(
          (item: Interface_File, index: number) => {
            return { ...item, id: index };
          }
        );
        setFiles(multipleData);
        onChange(multipleData);
      } else {
        setFiles(initialDataWithBase64);
        onChange(initialDataWithBase64);
      }
    }
    e.target.value = null;
  };

  const handleClickFile = (objectURL: any) => {
    window.open(objectURL);
  };

  const handleRemoveFile = (file: Interface_File) => {
    const data = files.filter((item: Interface_File) => item.id !== file.id);
    setFiles(data);
    onChange(data);
  };

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <ButtonWrapper display={multiple || !files[0]?.name ? "Y" : "N"}>
        <Input
          type="file"
          onChange={(e) => handleFileChange(e, files)}
          multiple={multiple}
        />
        <ButtonLabel>Upload File</ButtonLabel>
      </ButtonWrapper>
      <FilesWrapper>
        {files.length > 0 &&
          files.map((file: Interface_File, index: number) => {
            return (
              <FileWrapper key={index}>
                <FileLabel onClick={() => handleClickFile(file.objectURL)}>
                  {file.name}
                </FileLabel>
                <Close
                  src={CLOSE}
                  alt="close"
                  onClick={() => handleRemoveFile(file)}
                />
              </FileWrapper>
            );
          })}
      </FilesWrapper>
    </Wrapper>
  );
}

export default FileUpload;
