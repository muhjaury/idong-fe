import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .rdt_TableCol {
    font-weight: bolder;
    font-size: 14px;
  }
`;

export const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media all and (min-width: 768px) {
    width: 320px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperSearch = styled.div`
  display: block;
  align-items: center;
  justify-content: end;

  @media all and (min-width: 768px) {
    display: flex;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
`;
