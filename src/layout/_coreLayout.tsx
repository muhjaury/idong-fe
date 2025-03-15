import { color } from "@/constant/color";
import { Interface_Components } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div<Interface_Components>`
  display: ${({ loading }) => (loading === "Y" ? "flex" : "block")};
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.a3};
`;

export const Content = styled.div`
  min-height: calc(100vh - 100px - 220px - 64px);
`;
