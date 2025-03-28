export const base64ToBlob = async (data: any) => {
  const result = await fetch(data)
    .then((res) => res.blob())
    .then((data) => data);
  return result;
};

export const generateOneFileDataFromBase64 = async ({
  base64 = "",
  setData = (props: any) => props,
  fileName = "File",
}) => {
  base64ToBlob(base64).then((blob) => {
    const fileData = [
      {
        id: 0,
        base64: base64,
        name: fileName,
        objectURL: URL.createObjectURL(blob),
      },
    ];
    setData(fileData);
  });
};
