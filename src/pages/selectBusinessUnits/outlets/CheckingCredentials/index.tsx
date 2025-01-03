import { useEffect } from "react";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { useCheckCredentials } from "@hooks/useCheckCredentials";
import { CheckingCredentialsUI } from "./interface";

const CheckingCredentials = ({
  businessUnits,
}: {
  businessUnits: IBusinessUnitsPortalStaff[];
}) => {
  const checkCredentials = useCheckCredentials(businessUnits);

  useEffect(() => {
    const timer = setTimeout(checkCredentials, 2000);
    return () => clearTimeout(timer);
  }, [checkCredentials]);

  return <CheckingCredentialsUI />;
};

export { CheckingCredentials };
