import { Link } from "react-router-dom";
import styled from "styled-components";
import { basic } from "@design/tokens";

interface IStyledCollapseIcon {
  $collapse: boolean;
  $isTablet: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: ${basic.spacing.s500};
  height: 100vh;
  overflow-y: auto;
`;
const StyledContainerSection = styled.div`
  @media screen and (max-width: 532px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: ${basic.spacing.s200};
    gap: ${basic.spacing.s300};
  }
`;

const StyledHeaderContainer = styled.div`
  & div > div {
    cursor: pointer;
  }
`;

const StyledContentImg = styled(Link)`
  width: 100px;
`;

const StyledLogo = styled.img`
  max-width: 100px;
`;

const StyledTitle = styled.div`
  padding: ${basic.spacing.s600} ${basic.spacing.s1600} ${basic.spacing.s1000};

  @media screen and (max-width: 805px) {
    display: flex;
    padding: var(--spacing-S200, 16px);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-S300, ${basic.spacing.s300});
    align-self: stretch;
  }
`;

const StyledContainerCards = styled.div`
  box-sizing: border-box;
  padding: ${basic.spacing.s0} ${basic.spacing.s1400} ${basic.spacing.s400}
    170px;
  display: flex;
  flex-wrap: wrap;
  gap: ${basic.spacing.s400};

  @media screen and (max-width: 805px) {
    justify-content: center;
    padding: ${basic.spacing.s0};
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  margin-top: auto;
  padding: ${basic.spacing.s0} ${basic.spacing.s1600} ${basic.spacing.s0};
  justify-content: center;

  @media screen and (max-width: 532px) {
    padding-top: 50px;
    margin: ${basic.spacing.s0};
  }
`;

const StyledCollapseIcon = styled.div<IStyledCollapseIcon>`
  display: flex;
  transition: all 500ms ease;
  position: absolute;
  top: 13.5px;
  transform: ${({ $collapse }) =>
    $collapse ? "rotate(-90deg)" : "rotate(90deg)"};
  left: ${({ $isTablet }) => ($isTablet ? "150px" : "142px")};
`;

const StyledCollapse = styled.div`
  position: absolute;
  margin-top: 10px;
`;

export {
  StyledContainer,
  StyledHeaderContainer,
  StyledTitle,
  StyledContentImg,
  StyledLogo,
  StyledContainerCards,
  StyledFooter,
  StyledContainerSection,
  StyledCollapseIcon,
  StyledCollapse,
};
