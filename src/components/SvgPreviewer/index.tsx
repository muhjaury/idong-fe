import { Img, Wrapper } from "./_svgPreviewer";

function SvgPreviewer(props: any) {
  return (
    <Wrapper
      top={props.top}
      right={props.right}
      bottom={props.bottom}
      left={props.left}
    >
      <Img src={props.src} alt={props.alt ? props.alt : "image"} />
    </Wrapper>
  );
}

export default SvgPreviewer;
