import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useContext } from "react";
import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";
import { useAuth0 } from "@auth0/auth0-react";
import { PrivilegesRoutes } from "@routes/privileges";
import { RulesRoutes } from "@routes/rules";
import { usePortalData } from "@hooks/usePortalData";
import { useBusinessManagers } from "@hooks/useBusinessManagers";
import { useAuthRedirect } from "@hooks/useAuthRedirect";
import { Home } from "@pages/home";
import { AppContext, AppContextProvider } from "@context/AppContext";
import { SelectBusinessUnits } from "@pages/selectBusinessUnits";
import { SelectBusinessUnitsRoutes } from "@routes/selectBusinessunits";
import { GlobalStyles } from "./styles/global";
import { ThemeProviderWrapper } from "./context/ThemeContext";

const redirect_uri = window.location.origin;
const LogOut = () => {
  localStorage.clear();
  const { logout } = useAuth0();
  logout({ logoutParams: { returnTo: redirect_uri } });
  return <Home />;
};

const FirstPage = () => {
  const { businessUnitSigla } = useContext(AppContext);
  return businessUnitSigla.length === 0 ? <SelectBusinessUnits /> : <Home />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="selectBusinessUnit/*"
        element={<SelectBusinessUnitsRoutes />}
      />
      <Route path="/" element={<FirstPage />} errorElement={<ErrorPage />} />
      <Route path="/" element={<AppPage />}>
        <Route path="privileges/*" element={<PrivilegesRoutes />} />
        <Route path="rules/*" element={<RulesRoutes />} />
      </Route>
      <Route path="logout" element={<LogOut />} />
    </>
  )
);

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const portalCode = params.get("portal");

const App = () => {
  const { portalData, hasError: portalError } = usePortalData(portalCode);
  const { businessManagersData, hasError: businessError } =
    useBusinessManagers(portalData);

  const {
    hasError: authError,
    isLoading,
    isAuthenticated,
  } = useAuthRedirect(portalData, businessManagersData, portalCode);

  const hasError = portalError || businessError || authError;

  if (isLoading) {
    return null;
  }

  if (hasError && !isAuthenticated) {
    return <ErrorPage />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <GlobalStyles />
      <ThemeProviderWrapper>
        <AppContextProvider>
          <RouterProvider router={router} />
        </AppContextProvider>
      </ThemeProviderWrapper>
    </>
  );
};

export { App };
