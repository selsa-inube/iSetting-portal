import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "@context/AppContext";
import { useContext } from "react";
import { validateBusinessUnities } from "@pages/selectBusinessUnits/utils";

export function useSelectBusinessUnits() {
  const navigate = useNavigate();
  const location = useLocation();
  const { appData, setBusinessUnitsToTheStaff } = useContext(AppContext);

  useEffect(() => {
    if (appData.portal.publicCode) {
      validateBusinessUnities(
        appData.portal.publicCode,
        appData.user.userAccount
      ).then((data) => {
        setBusinessUnitsToTheStaff(data);
      });
    }
  }, [appData.portal.publicCode, setBusinessUnitsToTheStaff]);

  useEffect(() => {
    if (
      location.pathname === "/selectBusinessUnit" ||
      location.pathname === "/selectBusinessUnit/" ||
      location.pathname === "/"
    ) {
      navigate(`/selectBusinessUnit/checking-credentials/`);
    }
  }, [location, navigate]);
}
