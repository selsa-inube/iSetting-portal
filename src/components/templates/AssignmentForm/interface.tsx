import { MdSearch } from "react-icons/md";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { Textfield } from "@inubekit/textfield";

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
import { Text } from "@inubekit/text";
import { basic } from "@design/tokens";
import { MultipleChoices } from "@components/menu/MultipleChoices";
import { IOption } from "@components/menu/types";
import { Fieldset } from "@inubekit/fieldset";
import { IOptionItemChecked } from "@components/SelectCheck/OptionItem";
import { StyledForm, StyledToggleContainer } from "./styles";
import { IEntry, IOptions, titlesOptions } from "./types";

interface IAssignmentFormUI {
  entries: IEntry[];
  filter: string;
  filteredRows: IEntry[];
  filterValue: string;
  isAssignAll: boolean;
  menuOptions: IOption[];
  options: IOptions[];
  showMenu: boolean;
  title: string;
  handleCloseMenuInvitation: () => void;
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (options: IOptionItemChecked[]) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleToggleAllEntries: (allocate: boolean) => void;
  handleToggleMenuInvitation: () => void;
  onHandleSelectCheckChange: (id: string) => void;
  handleFilterInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const AssignmentFormUI = (props: IAssignmentFormUI) => {
  const {
    title,
    handleToggleAllEntries,
    entries,
    options,
    handleSubmit,
    handleSelectChange,
    onHandleSelectCheckChange,
    handleFilterInput,
    filterValue,
    isAssignAll,
    filteredRows,
  } = props;

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
          </Stack>

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
              {dataValidations ? (
                <Tr>
                  <Td align="center" colSpan={titlesOptions.length}>
                    <Text>No hay filas disponibles.</Text>
                  </Td>
                </Tr>
              ) : (
                filteredRows.map((entry, rowIndex) => (
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
                ))
              )}
            </Tbody>
          </Table>
        </Stack>
      </Fieldset>
    </StyledForm>
  );
};

export { AssignmentFormUI };
