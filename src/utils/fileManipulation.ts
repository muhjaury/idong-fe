export const base64ToBlob = async (data: any) => {
  const result = await fetch(data)
    .then((res) => res.blob())
    .then((data) => data);
  return result;
};
