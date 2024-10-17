import { useEffect, useState } from "react";
import { IOption } from "@components/navigation/Menu/types";
import { IOptionInitialiceEntryApp } from "@pages/privileges/outlets/positions/add-position/types";
import { IOptionItemCheckedProps } from "@components/inputs/SelectCheck/OptionItem";
import { AssignmentFormUI } from "./interface";
import { IEntry, Option } from "./types";

interface AssignmentFormProps {
  handleChange: (entries: IEntry[]) => void;
  entries: IEntry[];
  title: string;
  readOnly?: boolean;
  setChangedData?: (changeData: IEntry[]) => void;
  changeData?: IEntry[];
  valueSelect: IOptionInitialiceEntryApp[];
}

function AssignmentForm(props: AssignmentFormProps) {
  const {
    handleChange,
    entries,
    title,
    readOnly,
    setChangedData = () => {},
    changeData = [],
    valueSelect,
  } = props;
  const [filter, setFilter] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [isAssignAll, setIsAssignAll] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [filteredRows, setFilteredRows] = useState<IEntry[]>(entries);
  const [filterValue, setFilterValue] = useState("");

  const menuOptions: IOption[] = [
    {
      id: "allocate-all",
      label: "Asignar todos",
      handleClick: () => handleToggleAllEntries(true),
    },
    {
      id: "deallocate-all",
      label: "Desasignar todos",
      handleClick: () => handleToggleAllEntries(false),
    },
  ];

  const handleToggleAllEntries = (allocate: boolean) => {
    const newFilteredEntries = filteredRows.map((entry) => ({
      ...entry,
      isActive: allocate,
    }));

    const newEntries = entries.map((entry) => {
      const filteredEntry = newFilteredEntries.find((e) => e.id === entry.id);
      return filteredEntry ? filteredEntry : entry;
    });

    setIsAssignAll(allocate);
    handleChange(newEntries);
    setFilteredRows(newFilteredEntries);
  };

  const handleToggleEntry = (id: string) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        const updatedEntry = {
          ...entry,
          isActive: !entry.isActive,
        };

        if (updatedEntry.isActive !== entry.isActive) {
          const updatedChangedData = [
            ...changeData.filter((e) => e.id !== entry.id),
            updatedEntry,
          ];
          setChangedData(updatedChangedData);
        }

        return updatedEntry;
      }

      return entry;
    });

    handleChange(newEntries);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };

  const options: Option[] = valueSelect.map((entry) => ({
    id: entry.k_uso,
    label: entry.n_uso,
    checked: selectedOptions.includes(entry.k_uso),
  }));

  const handleSelectChange = (options: IOptionItemCheckedProps[]) => {
    const selectedIds = options
      .filter((option) => option.checked)
      .map((option) => option.id);
    setSelectedOptions(selectedIds);
  };

  useEffect(() => {
    if (selectedOptions.length === 0 && filterValue.length === 0) {
      setFilteredRows(entries);
      return;
    }
    let newfilter = filteredRows;

    if (selectedOptions.length > 0) {
      newfilter = entries.filter(
        (entry) => entry.k_uso && selectedOptions.includes(entry.k_uso)
      );
    }

    if (filterValue.length > 0) {
      newfilter = newfilter.filter(
        (entry) =>
          entry.value.toLowerCase().includes(filterValue.toLowerCase()) ||
          (entry.n_uso ?? "").toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    setFilteredRows(newfilter);
  }, [selectedOptions, filterValue]);

  const handleFilterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onHandleSelectCheckChange = (id: string) => {
    setFilteredRows((prevRows) =>
      prevRows.map((entry) =>
        entry.id === id
          ? {
              ...entry,
              isActive: !entry.isActive,
            }
          : entry
      )
    );
    handleToggleEntry(id);
  };

  return (
    <AssignmentFormUI
      handleToggleAllEntries={handleToggleAllEntries}
      filter={filter}
      handleFilter={handleFilter}
      entries={entries}
      title={title}
      showMenu={showMenu}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      menuOptions={menuOptions}
      isAssignAll={isAssignAll}
      readOnly={readOnly}
      filteredRows={filteredRows}
      handleSubmit={handleSubmit}
      handleSelectChange={handleSelectChange}
      options={options}
      filterValue={filterValue}
      onHandleSelectCheckChange={onHandleSelectCheckChange}
      handleFilterInput={handleFilterInput}
    />
  );
}

export { AssignmentForm };
export type { AssignmentFormProps };
