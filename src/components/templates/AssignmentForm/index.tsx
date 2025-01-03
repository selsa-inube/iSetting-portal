import { IOptionInitialiceEntryApp } from "@pages/privileges/outlets/positions/add-position/types";
import { useAssignmentFormLogic } from "@hooks/useAssignmentFormLogic";
import { AssignmentFormUI } from "./interface";
import { IEntry } from "./types";

interface IAssignmentForm {
  handleChange: (entries: IEntry[]) => void;
  entries: IEntry[];
  title: string;
  readOnly?: boolean;
  setChangedData?: (changeData: IEntry[]) => void;
  changeData?: IEntry[];
  valueSelect: IOptionInitialiceEntryApp[];
}

const AssignmentForm = (props: IAssignmentForm) => {
  const {
    handleChange,
    entries,
    title,
    readOnly,
    setChangedData = () => {},
    changeData = [],
    valueSelect,
  } = props;

  const {
    filteredRows,
    filterValue,
    handleFilterChange,
    handleToggleAllEntries,
    handleToggleEntry,
    handleSelectChange,
    menuOptions,
    isAssignAll,
    setShowMenu,
    showMenu,
  } = useAssignmentFormLogic(entries, changeData, setChangedData, handleChange);

  const options = valueSelect.map((entry) => ({
    id: entry.k_uso,
    label: entry.n_uso,
    checked: filteredRows.some((row) => row.k_uso === entry.k_uso),
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AssignmentFormUI
      handleToggleAllEntries={handleToggleAllEntries}
      filter={filterValue}
      handleFilter={handleFilterChange}
      entries={entries}
      title={title}
      showMenu={showMenu}
      handleToggleMenuInvitation={() => setShowMenu((prev) => !prev)}
      handleCloseMenuInvitation={() => setShowMenu(false)}
      menuOptions={menuOptions}
      isAssignAll={isAssignAll}
      readOnly={readOnly}
      filteredRows={filteredRows}
      handleSubmit={handleSubmit}
      handleSelectChange={handleSelectChange}
      options={options}
      filterValue={filterValue}
      onHandleSelectCheckChange={handleToggleEntry}
      handleFilterInput={handleFilterChange}
    />
  );
};

export { AssignmentForm };
export type { IAssignmentForm };
