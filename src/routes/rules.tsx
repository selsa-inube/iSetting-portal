import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { RulesOptions } from "@pages/rules/outlets/options";
import { Positions } from "@src/pages/rules/outlets/positions";


function RulesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RulesOptions />} />
      <Route path="/positions" element={<Positions />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { RulesRoutes };
