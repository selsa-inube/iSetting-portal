import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { useMediaQueries } from "@inubekit/hooks";

import { AppContext } from "@context/AppContext";
import { basic } from "@design/tokens";
import {
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledImage,
} from "./styles";

const SelectBusinessUnitsUI = () => {
  const {
    "(max-width: 1100px)": screenTablet,
    "(min-width: 1101px) and (max-width: 2200px)": screenDesktop,
  }: Record<string, boolean> = useMediaQueries([
    "(max-width: 1100px)",
    "(min-width: 1101px) and (max-width: 2200px)",
  ]);

  const imageWidth = () => {
    if (screenDesktop) return "240px";
    if (screenTablet) return "200px";
    return "160px";
  };

  const { appData } = useContext(AppContext);
  return (
    <Grid
      templateColumns={screenTablet ? "1fr" : "repeat(2, 1fr)"}
      templateRows={screenTablet ? "minmax(150px, 30vh) 1fr" : "100vh"}
    >
      <StyledWelcomeContainer>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={screenTablet ? `${basic.spacing.s200}` : `${basic.spacing.s400}`}
        >
          <Stack direction="column" alignItems="center">
            <Text as="h1" type="headline" size="large">
              Bienvenido a iSetting Portal
            </Text>
          </Stack>
          <StyledImage
            src={appData.businessManager.urlLogo}
            alt="Sistemas Enlinea"
            width={imageWidth()}
          />
        </Stack>
      </StyledWelcomeContainer>
      <StyledOutletContainer>
        <Stack
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          padding={
            screenTablet
              ? `${basic.spacing.s600} ${basic.spacing.s100} ${basic.spacing.s0}`
              : `${basic.spacing.s0}`
          }
        >
          <Outlet />
        </Stack>
      </StyledOutletContainer>
    </Grid>
  );
};

export { SelectBusinessUnitsUI };
