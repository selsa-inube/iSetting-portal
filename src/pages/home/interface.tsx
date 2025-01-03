import { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { MdOutlineChevronRight, MdOutlineDoorFront } from "react-icons/md";
import { Header } from "@inubekit/header";
import { Icon } from "@inubekit/icon";
import { useHomeLogic } from "@hooks/useHomeLogic";
import { nav, userMenu } from "@config/nav";
import { Title } from "@components/data/Title";
import { AppCard } from "@components/feedback/AppCard";
import { BusinessUnitChange } from "@design/inputs/BusinessUnitChange";
import { renderLogo } from "@hooks/renderLogo/logoUtils";
import {
  StyledCollapse,
  StyledCollapseIcon,
  StyledContainer,
  StyledContainerCards,
  StyledContainerSection,
  StyledFooter,
  StyledHeaderContainer,
  StyledLogo,
  StyledTitle,
} from "./styles";
import { ICardData } from "./types";

interface IHome {
  data?: ICardData[];
}

const HomeUI = (props: IHome) => {
  const { data } = props;
  const { appData } = useContext(AppContext);

  const {
    collapse,
    setCollapse,
    selectedClient,
    businessUnitsToTheStaff,
    handleLogoClick,
    collapseMenuRef,
    businessUnitChangeRef,
    isTablet,
    smallScreen,
    username,
  } = useHomeLogic();

  return (
    <>
      <StyledContainer>
        <StyledHeaderContainer>
          <Header
            portalId="portal"
            navigation={nav}
            logoURL={renderLogo(appData.businessUnit.urlLogo)}
            user={{
              username: appData.user.userName,
              breakpoint: "848px",
            }}
            menu={userMenu}
          />
          {businessUnitsToTheStaff.length > 1 && (
            <>
              <StyledCollapseIcon
                $collapse={collapse}
                onClick={() => setCollapse(!collapse)}
                $isTablet={isTablet}
                ref={collapseMenuRef}
              >
                <Icon
                  icon={<MdOutlineChevronRight />}
                  appearance="primary"
                  size="24px"
                  cursorHover
                />
              </StyledCollapseIcon>
              {collapse && (
                <StyledCollapse ref={businessUnitChangeRef}>
                  <BusinessUnitChange
                    businessUnits={businessUnitsToTheStaff}
                    onLogoClick={handleLogoClick}
                    selectedClient={selectedClient}
                  />
                </StyledCollapse>
              )}
            </>
          )}
        </StyledHeaderContainer>
        <StyledContainerSection $smallScreen={smallScreen}>
          <StyledTitle $smallScreen={smallScreen}>
            <Title
              title={`Bienvenid@, ${username}`}
              description="Selecciona una opción para empezar a ajustar la configuración."
              icon={<MdOutlineDoorFront />}
              sizeTitle="large"
            />
          </StyledTitle>
          <StyledContainerCards $smallScreen={smallScreen}>
            {data?.map((card) => (
              <AppCard
                key={card.id}
                label={card.label}
                description={card.description}
                icon={card.icon}
                url={card.url}
              />
            ))}
          </StyledContainerCards>
        </StyledContainerSection>
        <StyledFooter>
          <StyledLogo src={appData.businessManager.urlBrand} />
        </StyledFooter>
      </StyledContainer>
    </>
  );
};

export { HomeUI };
