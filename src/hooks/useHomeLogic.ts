import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "@context/AppContext";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { useMediaQuery } from "@inubekit/hooks";

const useHomeLogic = () => {
  const { appData, businessUnitsToTheStaff, setBusinessUnitSigla } =
    useContext(AppContext);

  const [collapse, setCollapse] = useState(false);
  const [selectedClient, setSelectedClient] = useState<string>("");
  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const businessUnitChangeRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery("(max-width: 944px)");
  const smallScreen = useMediaQuery("(max-width: 532px)");

  useEffect(() => {
    if (appData.businessUnit.publicCode) {
      setSelectedClient(appData.businessUnit.abbreviatedName);
    }
  }, [appData]);

  const handleLogoClick = (businessUnit: IBusinessUnitsPortalStaff) => {
    const selectJSON = JSON.stringify(businessUnit);
    setBusinessUnitSigla(selectJSON);
    setSelectedClient(businessUnit.abbreviatedName);
    setCollapse(false);
  };

  const username = appData.user.userName.split(" ")[0];

  return {
    collapse,
    setCollapse,
    selectedClient,
    setSelectedClient,
    collapseMenuRef,
    businessUnitChangeRef,
    isTablet,
    smallScreen,
    username,
    businessUnitsToTheStaff,
    handleLogoClick,
  };
};

export default useHomeLogic;
