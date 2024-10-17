import { basic } from "@design/tokens";
import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledButtonWrapper = styled.div`
  & > a > button > div {
    gap: ${basic.spacing.s8};
  }
`;
