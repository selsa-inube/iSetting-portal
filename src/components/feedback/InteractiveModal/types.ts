import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";

type ModalTypes = "fields" | "search";

interface Field {
  id: string;
  labelName: string;
  type?: string;
}

interface Action {
  id: string;
  content:
    | string
    | ((data: {
        [key: string]: string | number | boolean | React.ReactNode;
      }) => React.ReactNode);
}

interface InteractiveModalProps {
  closeModal: () => void;
  infoData: IPosition;
  portalId: string;
  title: string;
  actionsTitle?: string;
  actions?: Action[];
  divider?: boolean;
  id?: string;
  idLabel?: string;
  infoTitle?: string;
  label?: string;
  labels?: Field[];
  name?: string;
  nameLabel?: string;
  onClick?: string;
  placeholder?: string;
  searchData?:
    | { [key: string]: string }
    | Record<string, string | number | unknown>[];
  selectedItem?: string;
  setValidateCardRemoved?: React.Dispatch<React.SetStateAction<boolean>>;
  type?: ModalTypes;
}

export type { Field, Action, InteractiveModalProps, ModalTypes };
