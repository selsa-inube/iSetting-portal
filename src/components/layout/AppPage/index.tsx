import { useContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@inubekit/header";
import { Nav } from "@inubekit/nav";
import { Grid } from "@inubekit/grid";
import { useMediaQuery } from "@inubekit/hooks";
import { isMobile849 } from "@config/environment";
import { LogoutModal } from "@components/feedback/LogoutModal";
import { nav, logoutConfig } from "@config/nav";
import linparLogo from "@assets/images/linpar.png";
import { AppContext } from "@context/AppContext";
import {
  StyledAppPage,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
  StyledContainerNav,
  StyledHeaderContainer,
  StyledUserMenuTrigger,
} from "./styles";

import { userMenu } from "./config/apps.config";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

const AppPage = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const smallScreen = useMediaQuery(isMobile849);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      userMenuRef.current &&
      !userMenuRef.current.contains(event.target as Node)
    ) {
      setShowUserMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleToggleLogoutModal = () => {
    setShowLogoutModal(!showLogoutModal);
    setShowUserMenu(false);
  };

  const { appData } = useContext(AppContext);

  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" height="100vh" justifyContent="unset">
        <StyledHeaderContainer>
          <Header
            portalId="portal"
            logoURL={renderLogo(linparLogo)}
            user={{
              username: appData.user.userName,
              breakpoint: "600px",
            }}
            menu={userMenu}
          />
          <StyledUserMenuTrigger
            onClick={handleToggleUserMenu}
          ></StyledUserMenuTrigger>
        </StyledHeaderContainer>

        {showLogoutModal && (
          <LogoutModal
            logoutPath="/logout"
            handleShowBlanket={handleToggleLogoutModal}
          />
        )}

        <StyledContainer>
          <Grid
            templateColumns={smallScreen ? "1fr" : "auto 1fr"}
            alignContent="unset"
          >
            {!smallScreen && (
              <StyledContainerNav>
                <Nav
                  navigation={nav.items}
                  logoutPath={logoutConfig.logoutPath}
                  logoutTitle={logoutConfig.logoutTitle}
                />
              </StyledContainerNav>
            )}

            <StyledMain>
              <Outlet />
            </StyledMain>
          </Grid>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
};

export { AppPage };
