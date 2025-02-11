import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Wrapper {
  loading?: string;
}

export const Wrapper = styled.div<IF_Wrapper>`
  display: ${({ loading }) => (loading === "Y" ? "flex" : "block")};
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.a3};
`;

export const Content = styled.div`
  min-height: calc(100vh - 100px - 220px - 64px);
`;
