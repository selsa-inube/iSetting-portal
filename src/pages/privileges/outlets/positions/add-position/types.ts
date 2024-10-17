import React from "react";
import { FormikProps } from "formik";
import { IAssignmentFormEntry } from "@ptypes/forms.types";

import { IGeneralInformationEntry } from "../components/GeneralInformationForm";

export interface DataToAssignmentFormEntryProps {
  dataOptions: Record<string, unknown>[];
  idLabel: string;
  valueLabel: string;
  isActiveLabel: string;
  k_uso: string | undefined;
  n_uso?: string | undefined;
}

export function dataToAssignmentFormEntry(
  props: DataToAssignmentFormEntryProps
) {
  const { dataOptions, idLabel, valueLabel, isActiveLabel, k_uso, n_uso } =
    props;
  return dataOptions.map((dataOption) => ({
    value: String(dataOption[valueLabel]),
    isActive: Boolean(dataOption[isActiveLabel] === "Y"),
    id: String(dataOption[idLabel]),
    k_uso: k_uso ? String(dataOption[k_uso]) : "",
    n_uso: n_uso ? String(dataOption[n_uso]) : "",
  }));
}

export const titleButtonTextAssited = {
  goBackText: "Atrás",
  goNextText: "Siguiente",
  submitText: "Enviar",
};

export interface IPosition {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  public_code: string;
  abbreviated_name: string;
  n_roles?: string[];
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
  k_uso?: string;
  n_uso?: string;
}

export interface IOptionInitialiceEntryApp {
  k_uso: string;
  n_uso: string;
}

export interface IFormAddPosition {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  roles: { isValid: boolean; values: IOptionInitialiceEntry[] };
  application: { isValid: boolean; values: IOptionInitialiceEntryApp[] };
}

export interface IFormAddPositionRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
}

export type IHandleUpdateDataSwitchstep =
  | IGeneralInformationEntry
  | IAssignmentFormEntry[];
