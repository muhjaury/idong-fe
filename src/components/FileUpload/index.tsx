import { Interface_File } from "@/interface";
import { useState } from "react";
import CLOSE from "./../../assets/img/cancel-black.png";
import {
  ButtonWrapper,
  Close,
  FileLabel,
  FileWrapper,
  Input,
  Label,
  Wrapper,
} from "./_fileUpload";

function FileUpload() {
  const [file, setFile] = useState<Interface_File | any>({
    originalFile: null,
    size: "",
    type: "",
    name: "",
    blob: null,
    value: null,
    objectUrl: null,
    base64: "",
  });
  // const [fileActive, setFileActive] = useState<any>(null);

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      let initialData: any = new Promise((resolve) => {
        let reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function (i: any) {
          const arrayBuffer = i.target.result;
          resolve({
            originalFile: file,
            size: file.size,
            type: file.type,
            name: file.name,
            blob: new Blob([file], { type: file.type }),
            value: arrayBuffer,
            objectURL: URL.createObjectURL(file),
          });
        };
      });
      initialData = await initialData.then((res: any) => res);
      let initialDataWithBase64 = new Promise((resolve) => {
        let reader = new FileReader();
        reader.readAsDataURL(initialData.blob);
        reader.onload = function (i: any) {
          const base64data = reader.result;
          resolve({
            ...initialData,
            base64: base64data,
          });
        };
      });
      initialDataWithBase64 = await initialDataWithBase64.then(
        (res: any) => res
      );
      setFile(initialDataWithBase64);
    }
    e.target.value = null;
  };

  const handleClickFile = () => {
    window.open(file.objectURL);
  };

  const handleRemoveFile = () => {
    setFile({
      originalFile: null,
      size: "",
      type: "",
      name: "",
      blob: null,
      value: null,
      objectUrl: null,
      base64: "",
    });
  };

  // useEffect(() => {
  //   if (file.base64) {
  //     base64ToBlob(file.base64).then((res) => {
  //       setFileActive(URL.createObjectURL(res));
  //     });
  //   }
  // }, [file]);

  return (
    <Wrapper>
      {file?.name ? (
        <FileWrapper>
          <FileLabel onClick={() => handleClickFile()}>{file.name}</FileLabel>
          <Close src={CLOSE} alt="close" onClick={() => handleRemoveFile()} />
        </FileWrapper>
      ) : (
        <ButtonWrapper>
          <Input type="file" onChange={(e) => handleFileChange(e)} />
          <Label>Upload File</Label>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
}

export default FileUpload;
