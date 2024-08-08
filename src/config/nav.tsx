import { INav } from "@components/layout/AppPage/types";
import { MdOutlineStart } from "react-icons/md";

import { MdVpnKey } from "react-icons/md";

const appsConfig = [
  {
    id: 1,
    label: "Privilegios",
    description: "Gestionar los Cargos y sus privilegios",
    icon: <MdVpnKey />,
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/privileges",
        label: "Privilegios",
        id: "/privileges",
        isActive: true,
      },
    ],
    url: "/privileges",
  },  
];


const nav: INav = {
  title: "MENU",
  sections: {
    administrate: {
      name: "",
      links: {
        privileges: {
          id: "privileges",
          label: "Privilegios",
          icon: <MdOutlineStart />,
          path: "/privileges",
        },
      },
    },
  },
};

const logoutConfig = {
  logoutPath: "/logout",
  logoutTitle: "Cerrar sesión",
};

export { appsConfig, nav, logoutConfig};
