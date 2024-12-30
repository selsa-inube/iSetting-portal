import { useNavigate } from "react-router-dom";
import { BusinessUnitsUI } from "./interface";
import { useBusinessUnit } from "@hooks/useBusinessUnits";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";

interface BusinessUnitsProps {
  businessUnits: IBusinessUnitsPortalStaff[];
}

function BusinessUnits({ businessUnits }: BusinessUnitsProps) {
  const navigate = useNavigate();
  const {
    search,
    businessUnitLocal,
    handleSearchChange,
    handleChange,
    handleSubmit,
    filterBusinessUnits,
  } = useBusinessUnit(businessUnits);

  return (
    <BusinessUnitsUI
      businessUnits={businessUnits}
      search={search}
      businessUnit={businessUnitLocal}
      handleSearchChange={handleSearchChange}
      handleBussinessUnitChange={handleChange}
      filterBusinessUnits={filterBusinessUnits}
      handleSubmit={() => handleSubmit(navigate)}
    />
  );
}

export { BusinessUnits };