import React from "react";
import { MdOutlineMoreHoriz, MdSearch } from "react-icons/md";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { Textfield } from "@inubekit/textfield";
import { Icon } from "@inubekit/icon";
import { useMediaQuery } from "@inubekit/hooks";
import {
  Col,
  Colgroup,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
} from "@inubekit/table";
import { Toggle } from "@inubekit/toggle";
import { Fieldset } from "@inubekit/fieldset";
import { Text } from "@inubekit/text";

import { Menu } from "@components/navigation/Menu";
import { IOption } from "@components/navigation/Menu/types";
import { basic } from "@design/tokens";
import { MultipleChoices } from "@components/inputs/MultipleChoices";
import { isMobile650 } from "@config/environment";
import { IOptionItemCheckedProps } from "@components/inputs/SelectCheck/OptionItem";
import {
  StyledForm,
  StyledOptionsContainer,
  StyledToggleContainer,
} from "./styles";
import { IEntry, Option, titlesOptions } from "./types";

interface AssignmentFormUIProps {
  entries: IEntry[];
  filter: string;
  filteredRows: IEntry[];
  filterValue: string;
  isAssignAll: boolean;
  menuOptions: IOption[];
  options: Option[];
  showMenu: boolean;
  title: string;
  handleCloseMenuInvitation: () => void;
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (options: IOptionItemCheckedProps[]) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleToggleAllEntries: (allocate: boolean) => void;
  handleToggleMenuInvitation: () => void;
  onHandleSelectCheckChange: (id: string) => void;
  handleFilterInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

function AssignmentFormUI(props: AssignmentFormUIProps) {
  const {
    title,
    handleToggleAllEntries,
    entries,
    showMenu,
    options,
    handleSubmit,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    handleSelectChange,
    onHandleSelectCheckChange,
    handleFilterInput,
    filterValue,
    menuOptions,
    isAssignAll,
    filteredRows,
  } = props;

  const smallScreen = useMediaQuery(isMobile650);

  const dataValidations = entries.length === 0;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Fieldset legend={title} size="small" type="title">
        <Stack
          gap={basic.spacing.s16}
          direction="column"
          width="-webkit-fill-available"
        >
          <Stack gap={basic.spacing.s32} justifyContent="space-between">
            <Stack gap={basic.spacing.s16} alignItems="end">
              <MultipleChoices
                id="Multiples-choices"
                labelSelect="Selecciona la aplicacion"
                labelSelected=""
                onHandleSelectCheckChange={handleSelectChange}
                options={options}
                placeholderSelect="Seleccione una opción"
              />
              <Textfield
                type="search"
                iconBefore={<MdSearch size={22} />}
                placeholder="Búsqueda..."
                name="search"
                id="search"
                size="compact"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFilterInput(e)
                }
                value={filterValue}
                disabled={dataValidations}
              />
            </Stack>
            {smallScreen ? (
              <StyledOptionsContainer>
                <Icon
                  icon={<MdOutlineMoreHoriz />}
                  appearance="dark"
                  spacing="compact"
                  size="24px"
                  shape="circle"
                  onClick={handleToggleMenuInvitation}
                />
                {showMenu && (
                  <Menu
                    options={menuOptions}
                    handleClose={handleCloseMenuInvitation}
                  />
                )}
              </StyledOptionsContainer>
            ) : (
              <Stack gap={basic.spacing.s8} alignItems="end">
                <Button
                  spacing="compact"
                  onClick={() => handleToggleAllEntries(false)}
                  disabled={
                    !entries.some((entry) => entry.isActive) || dataValidations
                  }
                >
                  Desasignar todos
                </Button>
                <Button
                  spacing="compact"
                  onClick={() => handleToggleAllEntries(true)}
                  disabled={isAssignAll || dataValidations}
                >
                  Asignar todos
                </Button>
              </Stack>
            )}
          </Stack>
          {dataValidations ? (
            <Text>No se encuentran datos para seleccionar.</Text>
          ) : (
            <Table>
              <Colgroup>
                <Col width="8%" />
                <Col width="25%" />
              </Colgroup>
              <Thead>
                <Tr border="bottom">
                  {titlesOptions.map((title, index) => (
                    <Th key={index} align="left">
                      {title.titleName}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {filteredRows.map((entry, rowIndex) => (
                  <Tr key={rowIndex} border="bottom">
                    <Td align="left" type="custom">
                      <StyledToggleContainer>
                        <Toggle
                          checked={entry.isActive}
                          disabled={false}
                          id={`isActive-${entry.id}`}
                          name="isActive"
                          margin={basic.spacing.s0}
                          onChange={() => onHandleSelectCheckChange(entry.id)}
                          padding={basic.spacing.s0}
                          size="small"
                        />
                      </StyledToggleContainer>
                    </Td>
                    <Td align="left"> {entry.value}</Td>
                    <Td align="left"> {entry.n_uso}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Stack>
      </Fieldset>
    </StyledForm>
  );
}

export { AssignmentFormUI };
