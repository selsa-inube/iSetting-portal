import { Route, Routes } from "react-router-dom";
import { PositionsProvider } from "@context/positionsContext";

import { Privileges } from "@pages/privileges";
import { PrivilegesOptions } from "@src/pages/privileges/outlets/options";
import { ErrorPage } from "@components/layout/ErrorPage";

function PrivilegesRoutes() {
  return (
    <PositionsProvider>
      <Routes>
        <Route path="/" element={<Privileges />}>
          <Route path="options" element={<PrivilegesOptions />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </PositionsProvider>
    
  );
}

export { PrivilegesRoutes };
