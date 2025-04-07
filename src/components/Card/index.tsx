import { Bottom, Top, Wrapper } from "./_card";

function Card({ image, contentBottom }: any) {
  return (
    <Wrapper>
      <Top src={image} />
      <Bottom>{contentBottom}</Bottom>
    </Wrapper>
  );
}

export default Card;
