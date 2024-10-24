import { PrivilegesUI } from "./interface";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Privileges() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/rules" ||
      location.pathname === "/rules/"
    ) {
      navigate("/rules/options");
    }
  }, [location, navigate]);

  return <PrivilegesUI />;
}

export { Privileges };
