import { MdSearch } from "react-icons/md";
import { Text } from "@inubekit/text";

import { Stack } from "@inubekit/stack";
import { Textfield } from "@inubekit/textfield";
import { Button } from "@inubekit/button";
import { useMediaQuery } from "@inubekit/hooks";
import { isMobile970 } from "@config/environment";
import { basic } from "@design/tokens";
import { RadioBusinessUnit } from "@components/feedback/RadioBusinessUnit";
import {
  StyledBusinessUnits,
  StyledBusinessUnitsList,
  StyledNoResults,
  StyledBusinessUnitsItem,
} from "./styles";
import { IBusinessUnitsPortalStaff, IBusinessUnitstate } from "./types";

interface IBusinessUnitsUI {
  businessUnits: IBusinessUnitsPortalStaff[];
  search: string;
  businessUnit: IBusinessUnitstate;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBussinessUnitChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  filterBusinessUnits: (
    businessUnits: IBusinessUnitsPortalStaff[],
    search: string
  ) => IBusinessUnitsPortalStaff[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const NoResultsMessage = ({ search }: { search: string }) => {
  return (
    <StyledNoResults>
      <Text size="medium">
        No se encontraron resultados para &quot;{search}&quot;.
      </Text>
      <Text size="medium">
        Por favor, intenta modificando los parámetros de búsqueda.
      </Text>
    </StyledNoResults>
  );
};

const BusinessUnitsUI = ({
  businessUnits,
  search,
  businessUnit,
  handleSearchChange,
  filterBusinessUnits,
  handleBussinessUnitChange,
  handleSubmit,
}: IBusinessUnitsUI) => {
  const smallScreen = useMediaQuery(isMobile970);
  return (
    <StyledBusinessUnits $smallScreen={smallScreen}>
      <Stack
        direction="column"
        padding={`${basic.spacing.s16}${basic.spacing.s0}`}
      >
        <Text type="title" as="h2" textAlign="center">
          Unidad de Negocios
        </Text>
        <Text size="medium" textAlign="center">
          Seleccione la Unidad de Negocio
        </Text>
      </Stack>
      <form>
        <Stack direction="column" alignItems="center">
          {businessUnits.length > 10 && (
            <Textfield
              placeholder="Buscar..."
              type="search"
              name="searchBusinessUnits"
              id="searchBusinessUnits"
              value={search}
              fullwidth={true}
              onChange={handleSearchChange}
              iconBefore={<MdSearch size={22} />}
            />
          )}
          {filterBusinessUnits(businessUnits, search).length === 0 && (
            <NoResultsMessage search={search} />
          )}
          <StyledBusinessUnitsList
            $scroll={businessUnits.length > 5}
            $smallScreen={smallScreen}
          >
            <Stack
              direction="column"
              padding={`${basic.spacing.s0}${basic.spacing.s8}`}
              alignItems="center"
              gap={basic.spacing.s8}
            >
              {filterBusinessUnits(businessUnits, search).map(
                (businessUnit) => (
                  <StyledBusinessUnitsItem
                    key={businessUnit.businessUnitPublicCode}
                  >
                    <RadioBusinessUnit
                      name="businessUnit"
                      label={businessUnit.abbreviatedName}
                      id={businessUnit.businessUnitPublicCode}
                      value={businessUnit.abbreviatedName}
                      logo={businessUnit.urlLogo}
                      handleChange={handleBussinessUnitChange}
                    />
                  </StyledBusinessUnitsItem>
                )
              )}
            </Stack>
          </StyledBusinessUnitsList>
          <Button
            type="button"
            disabled={businessUnit.value}
            onClick={(e) =>
              handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
            }
          >
            Continuar
          </Button>
        </Stack>
      </form>
    </StyledBusinessUnits>
  );
};

export { BusinessUnitsUI };
