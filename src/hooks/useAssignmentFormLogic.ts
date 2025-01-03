import { useState, useEffect } from "react";

import { IOptionItemChecked } from "@components/SelectCheck/OptionItem";
import { IEntry } from "@components/templates/AssignmentForm/types";

const useAssignmentFormLogic = (
  entries: IEntry[],
  changeData: IEntry[],
  setChangedData: (changeData: IEntry[]) => void,
  handleChange: (entries: IEntry[]) => void
) => {
  const [filter, setFilter] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [isAssignAll, setIsAssignAll] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [filteredRows, setFilteredRows] = useState<IEntry[]>(entries);
  const [filterValue] = useState("");

  const menuOptions = [
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

  const handleSelectChange = (options: IOptionItemChecked[]) => {
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
    let newFilter = filteredRows;

    if (selectedOptions.length > 0) {
      newFilter = entries.filter(
        (entry) => entry.k_uso && selectedOptions.includes(entry.k_uso)
      );
    }

    if (filterValue.length > 0) {
      newFilter = newFilter.filter(
        (entry) =>
          entry.value.toLowerCase().includes(filterValue.toLowerCase()) ||
          (entry.n_uso ?? "").toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    setFilteredRows(newFilter);
  }, [selectedOptions, filterValue]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return {
    filteredRows,
    filterValue,
    filter,
    setFilter,
    handleFilterChange,
    handleToggleAllEntries,
    handleToggleEntry,
    handleSelectChange,
    menuOptions,
    isAssignAll,
    setShowMenu,
    showMenu,
  };
};

export { useAssignmentFormLogic };
