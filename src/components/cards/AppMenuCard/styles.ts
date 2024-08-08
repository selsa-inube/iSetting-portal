import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/foundations";
import { basic } from "@design/tokens";
import { isMobile580 } from "@src/config/environment";

const StyledAppMenuCard = styled(Link)`
  box-sizing: border-box;
  padding: ${basic.spacing.s16};
  width: 191px;
  height: 140px;
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.color?.stroke.dark.regular || inube.palette.neutral.N900};
  :hover {
    & svg {
      color: ${({ theme }) =>
        theme?.color?.stroke.primary.regular || inube.palette.blue.B400};
    }
    & picture {
      background-color: ${({ theme }) =>
        theme?.color?.surface.gray.regular || inube.palette.neutral.N30};
    }
  }

  @media (${isMobile580}) {
    display: flex;
    width: 100%;
    height: 72px;
    padding: ${basic.spacing.s16} ${basic.spacing.s8};
    & div:first-child {
      flex-direction: row;
      gap: ${basic.spacing.s8};
    }
    & p {
      text-align: left;
    }
  }
`;

export { StyledAppMenuCard };
