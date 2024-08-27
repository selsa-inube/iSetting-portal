import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";
import { Icon } from "@inube/design-system";

export const stepsAddPosition = {
  generalInformation: {
    id: 1,
    label: "Información general",
    description: "Por favor completa la información general.",
  },
  rolesPorCargos: {
    id: 2,
    label: "Roles",
    description: "Por favor completa la información de roles.",
  },
  summary: {
    id: 3,
    label: "Verificación",
    description:
      "Verifica las opciones activadas, si es necesario cámbialas o por el contrario si todo está correcto dale enviar.",
    isVerification: true,
  },
};

export const createPositionConfig = [
  {
    id: 1,
    title: "Agregar cargo",
    description: "Completa la información para agregar cargo",
    route: "/privileges/positions/add-position",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/home",
        isActive: false,
      },
      {
        path: "/privileges",
        label: "Privilegios",
        id: "/privileges",
        isActive: false,
      },
      {
        path: "/privileges/positions",
        label: "Cargos",
        id: "/privileges/positions",
        isActive: false,
      },
      {
        path: "/privileges/positions/add-position",
        label: "Agregar cargo",
        id: "/privileges/positions/add-position",
        isActive: true,
      },
    ],
  },
];

export const finishAssistedPositionModalConfig = {
  title: "Finalizar registro",
  description: "¿Está seguro de que desea finalizar el proceso de creación?",
  actionText: "Finalizar",
  appearance: "success",
};

export const finishAssistedPositionMessagesConfig = {
  success: {
    id: 1,
    icon: <Icon appearance="dark" icons={<MdThumbUpOffAlt />} size="18px" />,
    title: "Creación exitosa",
    description: (value: string) =>
      `Hemos creado el cargo ${value} exitosamente.`,
    appearance: "success",
  },
  failed: {
    id: 2,
    icon: <Icon appearance="dark" icons={<MdErrorOutline />} size="18px" />,
    title: "¡Uy, algo ha salido mal!",
    description: (value: string) =>
      `Hemos presentado un error creando el cargo ${value}.`,
    appearance: "danger",
  },
};

export const finishAssistedModalConfig = {
  title: "Finalizar registro",
  description: "¿Está seguro de que desea finalizar el proceso de creación?",
  actionText: "Finalizar",
  appearance: "success",
};