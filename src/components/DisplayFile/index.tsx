import { useEffect, useState } from "react";
import { Button } from "..";
import { Wrapper } from "./_displayFile";
import { base64ToBlob } from "@/utils/fileManipulation";

function DisplayFile({ label = "Lihat File", base64 = "" }) {
  const [objectURL, setObjectURL] = useState<string>("");

  useEffect(() => {
    if (base64) {
      base64ToBlob(base64).then((data) => {
        setObjectURL(URL.createObjectURL(data));
      });
    }
  }, [base64]);

  const handleButtonClick = () => {
    window.open(objectURL);
  };

  return (
    <Wrapper>
      <Button onClick={handleButtonClick} removeshadow="Y">
        {label}
      </Button>
    </Wrapper>
  );
}

export default DisplayFile;
