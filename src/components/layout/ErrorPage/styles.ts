import styled from "styled-components";
interface IStyledCompanyLogo {
  $smallScreen: boolean;
}
const StyledCompanyLogo = styled.img<IStyledCompanyLogo>`
  max-width: ${({ $smallScreen }) => ($smallScreen ? "300px" : "250px")};
`;

const StyledErrorImage = styled.img`
  justify-self: center;
  max-width: 100%;
`;

export { StyledCompanyLogo, StyledErrorImage };
