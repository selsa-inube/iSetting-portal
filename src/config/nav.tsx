import {
  MdOutlineStart,
  MdVpnKey,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";

import { INav } from "@pages/home/types";
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
  items: {
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
          rules: {
            id: "rules",
            label: "Reglas",
            icon: <MdOutlineSettings />,
            path: "/rules",
          },
        },
      },
    },
  },
  breakpoint: "848px",
};

const userMenu = [
  {
    id: "section",
    title: "",
    links: [
      {
        id: "logout",
        title: "Cerrar sesión",
        path: "/logout",
        iconBefore: <MdLogout />,
      },
    ],
    divider: true,
  },
];

const logoutConfig = {
  logoutPath: "/logout",
  logoutTitle: "Cerrar sesión",
};

export { appsConfig, nav, logoutConfig, userMenu };
