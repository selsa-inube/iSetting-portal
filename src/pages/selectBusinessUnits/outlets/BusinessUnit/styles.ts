import { basic } from "@design/tokens";
import styled from "styled-components";

interface StyledBusinessUnitsListProps {
  $scroll?: boolean;
  $smallScreen?: boolean;
}

interface IStyledContainer {
  $smallScreen?: boolean;
}

const StyledBusinessUnits = styled.div<IStyledContainer>`
  & form {
    & > div {
      margin: ${basic.spacing.s500} auto ${basic.spacing.s0};
      width: ${(props) => (props.$smallScreen ? "auto" : "500px")};
    }
  }

  & button {
    margin-top: ${basic.spacing.s300};
  }
`;

const StyledBusinessUnitsList = styled.div<StyledBusinessUnitsListProps>`
  & > div {
    list-style: none;
    max-height: 330px;
    width: ${(props) => (props.$smallScreen ? "200px" : "500px")};
    overflow-y: auto;
    min-height: ${(props) => (props.$smallScreen ? "auto" : "200px")};
  }
`;

const StyledNoResults = styled.div`
  margin: ${basic.spacing.s200} ${basic.spacing.s0};
`;

const StyledBusinessUnitsItem = styled.li`
  width: 100%;
`;

export {
  StyledBusinessUnits,
  StyledBusinessUnitsList,
  StyledNoResults,
  StyledBusinessUnitsItem,
};
