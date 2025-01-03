import styled from "styled-components";
import { basic } from "@design/tokens";

const StyledForm = styled.form`
  width: 100%;
`;

const StyledEntriesContainer = styled.div`
  & > div {
    max-height: 300px;
    overflow-y: auto;
  }
`;

const StyledOptionsContainer = styled.div`
  height: ${basic.spacing.s24};
  text-align: right;
`;

const StyledToggleContainer = styled.div`
  & > div {
    justify-content: center;
  }
`;

export {
  StyledEntriesContainer,
  StyledForm,
  StyledOptionsContainer,
  StyledToggleContainer,
};
