import { useState, useContext } from "react";
import { NavigateFunction } from "react-router-dom";
import { AppContext } from "@context/AppContext";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { IBusinessUnitstate } from "@components/businessUnit/types";

const useBusinessUnit = (businessUnits: IBusinessUnitsPortalStaff[]) => {
  const { setBusinessUnitSigla } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [selectedBusinessUnit, setSelectedBusinessUnit] = useState<
    IBusinessUnitsPortalStaff | undefined
  >();
  const [businessUnitLocal, setBusinessUnitLocal] =
    useState<IBusinessUnitstate>({
      ref: null,
      value: true,
    });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (businessUnitLocal.ref) {
      businessUnitLocal.ref.checked = false;
    }
    setBusinessUnitLocal({ ref: null, value: true });
    setSearch(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessUnitLocal({ ref: event.target, value: false });
    const selectOption = businessUnits.find(
      (businessUnit) => businessUnit.abbreviatedName === event.target.value
    );
    setSelectedBusinessUnit(selectOption);
  };

  const handleSubmit = (navigate: NavigateFunction) => {
    if (selectedBusinessUnit) {
      const selectJSON = JSON.stringify(selectedBusinessUnit);
      setBusinessUnitSigla(selectJSON);
    }
    navigate("/selectBusinessUnit/loading-app");
  };

  const filterBusinessUnits = (
    businessUnits: IBusinessUnitsPortalStaff[],
    search: string
  ) => {
    const upperCaseSearch = search?.toUpperCase();
    return businessUnits.filter((unit) => {
      const businessUnitName = unit?.abbreviatedName?.toUpperCase() || "";
      const businessUnitSigla = unit?.publicCode?.toUpperCase() || "";

      return (
        businessUnitName.includes(upperCaseSearch) ||
        businessUnitSigla.includes(upperCaseSearch)
      );
    });
  };

  return {
    search,
    selectedBusinessUnit,
    businessUnitLocal,
    handleSearchChange,
    handleChange,
    handleSubmit,
    filterBusinessUnits,
  };
};

export { useBusinessUnit };
