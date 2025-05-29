import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

export const WrapperDisplayFile = styled.div`
  width: 100%;
`;

export const WrapperDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media all and (min-width: 768px) {
    width: 640px;
  }
`;
