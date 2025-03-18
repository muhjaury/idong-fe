import { Bottom, Top, Wrapper } from "./_card";

function Card({ contentTop, contentBottom }: any) {
  return (
    <Wrapper>
      <Top>{contentTop}</Top>
      <Bottom>{contentBottom}</Bottom>
    </Wrapper>
  );
}

export default Card;
