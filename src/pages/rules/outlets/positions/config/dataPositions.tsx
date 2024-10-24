import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { DetailsModal } from "../components/DetailsModal";

import { IActions, IAction } from "../types";
import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";

export const titlesOptions = [
  {
    id: "abbreviated_name",
    titleName: "Creditos",
    action: false,
    priority: 1,
  },
];

export const PositionsBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1010px)", totalColumns: 1 },
  { breakpoint: "(max-width: 848px)", totalColumns: 2 },
  { breakpoint: "(max-width: 430px)", totalColumns: 1 },
];

export const labelsOptions = [
  {
    id: "public_code",
    labelName: "Código",
    type: "text",
  },
  {
    id: "abbreviated_name",
    labelName: "Descripción Funcional",
    type: "text",
  },
  {
    id: "n_roles",
    labelName: "Roles",
    type: "table",
  },
];

export const actions: IAction[] = [
  {
    id: "details",
    actionName: "Detalle",
    content: (data: IActions) => (
      <DetailsModal data={data as IPosition} labelsOptions={labelsOptions} />
    ),
  },
  {
    id: "edit",
    actionName: "Editar",
    content: () => <Icon icon={<MdModeEdit />} size="16px" appearance="dark" />,
  },
  {
    id: "delete",
    actionName: "Eliminar",
    content: () => (
      <Icon icon={<MdOutlineDelete />} size="16px" appearance="dark" />
    ),
  },
];
