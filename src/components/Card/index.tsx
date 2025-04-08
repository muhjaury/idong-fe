import BACKGROUND from "./../../assets/svg/background.svg";
import { Bottom, Top, Wrapper } from "./_card";

function Card({ image = BACKGROUND, contentBottom = <></> }) {
  return (
    <Wrapper>
      <Top src={image} />
      <Bottom>{contentBottom}</Bottom>
    </Wrapper>
  );
}

export default Card;
