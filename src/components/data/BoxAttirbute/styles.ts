import { inube } from "@inubekit/foundations";
import { basic } from "@design/tokens";

import styled from "styled-components";

export const StyledBoxAttribute = styled.div`
  display: flex;
  height: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${basic.spacing.s8};
  padding: ${basic.spacing.s6} ${basic.spacing.s16};
  background-color: ${({ theme }) =>
    theme?.color?.surface?.gray?.clear || inube.palette.neutral.N10};
`;
