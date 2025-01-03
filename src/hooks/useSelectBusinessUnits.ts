import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { validateBusinessUnities } from "@pages/selectBusinessUnits/utils";

const useSelectBusinessUnits = () => {
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
};

export { useSelectBusinessUnits };
