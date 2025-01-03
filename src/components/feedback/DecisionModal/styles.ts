import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { basic } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  background-color: ${inube.palette.neutral.N0};
  min-width: ${(props) => (props.$smallScreen ? "300px" : "400px")};
  max-width: ${(props) => (props.$smallScreen ? "328px" : "500px")};
  height: auto;
  border-radius: ${basic.spacing.s8};
  margin: ${basic.spacing.s16};
`;

export { StyledModal };
