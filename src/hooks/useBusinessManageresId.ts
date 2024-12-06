import { useState, useEffect } from "react";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
import { businessUnitsPortalStaffId } from "src/services/staffPortal/getBusinessManagersId";

const useBusinessManagersId = (portalPublicCode: string) => {
  const [businessManagersData, setBusinessManagersData] = useState<
    IBusinessUnitsPortalStaffId[]
  >([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchBusinessManagers = async () => {
      if (!portalPublicCode) {
        setHasError(true);
        return;
      }
      try {
        const newData = await businessUnitsPortalStaffId(portalPublicCode);
        setBusinessManagersData(newData);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };

    fetchBusinessManagers();
  }, [portalPublicCode]);
  return { businessManagersData, hasError };
};

export { useBusinessManagersId };
