import BACKGROUND from "./../../assets/svg/background.svg";
import { Bottom, Top, Wrapper } from "./_card";
import { Card_Type } from "./card.type";

function Card({
  image = BACKGROUND,
  contentBottom = <></>,
  onClick = () => {},
}: Card_Type) {
  return (
    <Wrapper onClick={onClick}>
      <Top src={image} />
      <Bottom>{contentBottom}</Bottom>
    </Wrapper>
  );
}

export default Card;
