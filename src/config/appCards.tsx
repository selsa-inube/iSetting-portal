import { MdOutlineSettings, MdOutlineStart } from "react-icons/md";
import { ICardData } from "@pages/home/types";

const appCards: ICardData[] = [
  {
    id: "privileges",
    label: "Privilegios",
    description: "Privilegios.",
    icon: <MdOutlineStart />,
    url: "/privileges",
  },
  {
    id: "rules",
    label: "Reglas",
    description: "Reglas.",
    icon: <MdOutlineSettings />,
    url: "/rules",
  },
];

export { appCards };
