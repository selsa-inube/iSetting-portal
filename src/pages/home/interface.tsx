import { Header } from "@inubekit/header";
import { Icon } from "@inubekit/icon";
import { MdOutlineChevronRight, MdOutlineDoorFront } from "react-icons/md";
import { AppCard } from "@components/feedback/AppCard";
import { nav, userMenu } from "@config/nav";
import { Title } from "@components/data/Title";
import { BusinessUnitChange } from "@design/inputs/BusinessUnitChange";
import { useHomeLogic } from "@hooks/useBusinessUnitState";
import {
  StyledCollapse,
  StyledCollapseIcon,
  StyledContainer,
  StyledContainerCards,
  StyledContainerSection,
  StyledContentImg,
  StyledFooter,
  StyledHeaderContainer,
  StyledLogo,
  StyledTitle,
} from "./styles";

import { ICardData } from "./types";

interface IHome {
  data?: ICardData[];
}

const renderLogo = (imgUrl: string) => (
  <StyledContentImg to="/">
    <StyledLogo src={imgUrl} />
  </StyledContentImg>
);

function HomeUI({ data }: IHome) {
  const {
    collapse,
    setCollapse,
    selectedClient,
    collapseMenuRef,
    businessUnitChangeRef,
    isTablet,
    username,
    businessUnitsToTheStaff,
    appData,
    handleLogoClick,
  } = useHomeLogic();

  return (
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
      <StyledContainerSection>
        <StyledTitle>
          <Title
            title={`Bienvenid@, ${username}`}
            description="Selecciona una opción para empezar a ajustar la configuración."
            icon={<MdOutlineDoorFront />}
            sizeTitle="large"
          />
        </StyledTitle>
        <StyledContainerCards>
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
  );
}

export { HomeUI };
