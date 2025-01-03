import { appCards } from "@config/appCards";
import { HomeUI } from "./interface";

const Home = () => {
  return <HomeUI data={appCards} />;
};

export { Home };
