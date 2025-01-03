import { AppMenu } from "@components/layout/AppMenu";
import { IRoute } from "@components/layout/AppMenu/types";
import { AppMenuGrid } from "@components/layout/AppMenuGrid";
import { IAppMenuCard } from "@components/cards/AppMenuCard";

interface IRulesOptions {
  appName: string;
  appDescription: string;
  appOptions: IAppMenuCard[];
  appRoute: IRoute[];
}

const RulesOptionsUI = ({
  appName,
  appDescription,
  appOptions,
  appRoute,
}: IRulesOptions) => (
  <AppMenu
    appName={appName}
    appDescription={appDescription}
    appRoute={appRoute}
  >
    <AppMenuGrid appOptions={appOptions} />
  </AppMenu>
);

export { RulesOptionsUI };
