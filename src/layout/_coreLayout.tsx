import { color } from "@/constant/color";
import styled from "styled-components";

interface Int_Wrapper {
  loading?: string;
}

export const Wrapper = styled.div<Int_Wrapper>`
  display: ${({ loading }) => (loading === "Y" ? "flex" : "block")};
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.a5};
`;

export const Content = styled.div`
  min-height: calc(100vh - 100px - 160px);
`;
