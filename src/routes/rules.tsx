import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { RulesOptions } from "@pages/rules/outlets/options";
import { Rules } from "@pages/rules";

const RulesRoutes = () => {
  return (
    <Routes>
      <Route path="/rules" element={<Rules />} />
      <Route path="/" element={<RulesOptions />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export { RulesRoutes };
