import { useNavigate } from "react-router-dom";
import { useBusinessUnit } from "@hooks/useBusinessUnits";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { BusinessUnitsUI } from "./interface";

interface IBusinessUnits {
  businessUnits: IBusinessUnitsPortalStaff[];
}

const BusinessUnits = ({ businessUnits }: IBusinessUnits) => {
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
};

export { BusinessUnits };
