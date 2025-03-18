import CLOSE from "./../../assets/img/cancel-black.png";
import { Close, Content, Wrapper } from "./_modal";

const Modal = ({
  children = <></>,
  display = false,
  onClose = () => {},
  type = "primary",
}) => {
  const handleCloseClick = () => {
    onClose();
  };

  if (!display) return;
  return (
    <Wrapper>
      <Close src={CLOSE} onClick={handleCloseClick} type={type} />
      <Content type={type}>{children}</Content>
    </Wrapper>
  );
};

export default Modal;
