import { inube } from "@inubekit/foundations";
import { basic } from "@design/tokens";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  padding: ${basic.spacing.s12} ${basic.spacing.s16};
  flex-direction: column;
  gap: ${basic.spacing.s16};
  border-radius: 8px;
  box-sizing: border-box;
  align-items: stretch;
  width: 100%;
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.gray?.regular || inube.palette.neutral.N200};
`;

export const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;
