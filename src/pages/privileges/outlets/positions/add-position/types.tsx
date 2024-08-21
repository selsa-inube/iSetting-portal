import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "../components/GeneralInformationForm";

export const titleButtonTextAssited = {
  before: "Anterior",
  after: "Siguiente",
  finish: "Enviar",
};
export interface IPosition {
  public_code: string;
  abbreviated_name: string;
}
export interface IStep {
  id: number;
  label: string;
  description: string;
}

export interface IOptionInitialiceEntry {
  id: string;
  value: string;
  isActive: boolean;
}

export interface IFormAddPosition {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  roles: { isValid: boolean; values: IOptionInitialiceEntry[] };
}

export interface IFormAddPositionRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
}

export type IHandleUpdateDataSwitchstep =
  | IGeneralInformationEntry;
