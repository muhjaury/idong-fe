import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  .rdt_TableCol {
    font-weight: bolder;
    font-size: 14px;
  }

  .rdt_TableHeadRow {
    > div:last-child {
      min-width: 240px;
    }
  }

  .rdt_TableRow {
    > div:last-child {
      min-width: 240px;
    }
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
