import { Load, LoadingWrapper, Wrapper } from "./_loading";

function Loading() {
  return (
    <LoadingWrapper>
      <Load />
    </LoadingWrapper>
  );
}

function LoadingContent() {
  return (
    <Wrapper>
      <Load />
    </Wrapper>
  );
}

export { Loading, LoadingContent };
