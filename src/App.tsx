import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useEffect } from "react";
import RemoteA from "remoteA/App"
import { AppPage } from "@components/layout/AppPage";

import { useAuth0 } from "@auth0/auth0-react";
import { initializeDataDB } from "@mocks/utils/inicializeDataDB";
import { environment } from "@config/environment";
import { PrivilegesRoutes } from "@routes/privileges";
import { RulesRoutes } from "@routes/rules";

import { GlobalStyles } from "./styles/global";
import { ErrorPage } from "./components/layout/ErrorPage";
import "systemjs";

function LogOut() {
  localStorage.clear();
  const { logout } = useAuth0();
  logout({ logoutParams: { returnTo: environment.REDIRECT_URI } });
  return <AppPage />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppPage />}>
        <Route path="/" element={<PrivilegesRoutes />} />
        <Route path="privileges/*" element={<PrivilegesRoutes />} />
        <Route path="rules/*" element={<RulesRoutes />} />
        <Route
          path="credicar/*"
          element={<RemoteA />}
        />
      </Route>
      <Route path="logout" element={<LogOut />} />
      <Route path="/*" errorElement={<ErrorPage />} />
    </>
  )
);

function App() {
  useEffect(() => {
    initializeDataDB();
  }, []);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export { App };
