import { useLocation } from "react-router-dom";
import { MdSearch, MdPersonAddAlt } from "react-icons/md";

import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";
import { Textfield } from "@inubekit/textfield";
import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/button";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import {
  Col,
  Colgroup,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
  Tfoot,
  Pagination,
} from "@inubekit/table";
import { PageTitle } from "@components/PageTitle";
import { basic } from "@design/tokens";
import { isMobile580 } from "@config/environment";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
import { useActions } from "@hooks/useActions";
import { privilegeOptionsConfig } from "../../config/privileges.config";
import { titlesOptions, actions } from "./config/dataPositions";
import { usePagination } from "./components/GeneralInformationForm/utils";
import { StyledButtonWrapper } from "./styles";

const pagerecord = 10;

interface IPositions {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPosition: string;
  data: IBusinessUnitsPortalStaffId[];
  loading: boolean;
}

const PositionsUI = (props: IPositions) => {
  const { handleSearchPositions, searchPosition, loading, data } = props;
  const smallScreen = useMediaQuery(isMobile580);
  const location = useLocation();
  const label = privilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  const { ShowAction, showActionTitle } = useActions();

  const {
    filteredData,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
    firstEntryInPage,
    lastEntryInPage,
    paginatedData,
  } = usePagination(searchPosition, data, pagerecord);

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `{${basic.spacing.s24}}`
          : `${basic.spacing.s32} ${basic.spacing.s64}`
      }
    >
      <Stack gap={basic.spacing.s48} direction="column">
        <Stack gap={basic.spacing.s24} direction="column">
          {label && (
            <>
              <Breadcrumbs crumbs={label.crumbs} />
              <PageTitle
                title={label.label}
                description={label.description}
                navigatePage="/privileges/options"
              />
            </>
          )}
        </Stack>
        <Stack>
          <Text type="title" size={smallScreen ? "medium" : "large"}>
            Consulta de Cargos vigentes ({filteredData.length})
          </Text>
        </Stack>
        <Stack gap={basic.spacing.s32} direction="column">
          <Stack justifyContent="space-between" alignItems="center">
            <Textfield
              name="searchPositions"
              id="searchPositions"
              placeholder="Búsqueda..."
              type="search"
              iconBefore={<MdSearch />}
              size="compact"
              value={searchPosition}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearchPositions(e)
              }
            />
            <StyledButtonWrapper>
              <Button
                iconBefore={<MdPersonAddAlt />}
                spacing="wide"
                type="link"
                path="/privileges/positions/add-position"
              >
                Solicitar nuevo cargo
              </Button>
            </StyledButtonWrapper>
          </Stack>
          {loading && data.length <= 0 ? (
            <LoadingApp />
          ) : (
            <Table>
              <Colgroup>
                <Col width="80%" />
              </Colgroup>
              <Thead>
                <Tr border="bottom">
                  {titlesOptions.map((title, index) => (
                    <Th
                      key={index}
                      action={title.action}
                      align={title.action ? "center" : "left"}
                    >
                      {title.titleName}
                    </Th>
                  ))}
                  {showActionTitle(actions)}
                </Tr>
              </Thead>
              <Tbody>
                {paginatedData.map((entry, rowIndex) => (
                  <Tr key={rowIndex} border="bottom">
                    {titlesOptions.map((title) => (
                      <Td
                        key={`e-${entry[title.id]}`}
                        align={entry.action ? "center" : "left"}
                      >
                        {entry[title.id]}
                      </Td>
                    ))}
                    {ShowAction(actions, entry)}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr border="bottom">
                  <Td
                    colSpan={titlesOptions.length + actions.length}
                    type="custom"
                    align="right"
                  >
                    <Pagination
                      firstEntryInPage={firstEntryInPage}
                      lastEntryInPage={lastEntryInPage}
                      totalRecords={filteredData.length}
                      handleStartPage={handleStartPage}
                      handlePrevPage={handlePrevPage}
                      handleNextPage={handleNextPage}
                      handleEndPage={handleEndPage}
                    />
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export { PositionsUI };
