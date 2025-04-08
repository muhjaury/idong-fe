import { Bottom, Top, Wrapper } from "./_card";

function Card({ image = "", contentBottom = <></> }) {
  return (
    <Wrapper>
      <Top src={image} />
      <Bottom>{contentBottom}</Bottom>
    </Wrapper>
  );
}

export default Card;
