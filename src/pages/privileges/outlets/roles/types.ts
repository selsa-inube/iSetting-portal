import { FormikProps } from "formik";
export interface IDeleteForMessage {
  id: number;
  successfulDiscard: boolean;
}

export interface ICasosDeUsoPorRol {
  k_Rol?: number;
  k_Usecase: string;
}
export interface ICuentasAuxiliaresPorRol {
  id?: number;
  i_Tipent: string;
  k_Codcta: string;
  k_Rol: number;
}

export interface IReglasDeNegocioPorRol {
  k_Regla: string;
  k_Rol?: number;
}

interface ITareasCrediboardPorRol {
  k_Rol: number;
  tarea: string;
}

export interface ITiposDeMovimientoContablePorRol {
  k_Rol?: number;
  k_Tipmov: string;
  n_Tipmov?: string;
}

export interface IRol {
  id?: number;
  modifyJustification?: string;
  i_Activo: string;
  k_Rol: number;
  k_Tipcon: string;
  n_Rol: string;
  n_Uso: string;
  k_Uso?: string;
  k_Aplica: string;
  casosDeUsoPorRol?: ICasosDeUsoPorRol[];
  cuentasAuxiliaresPorRol?: ICuentasAuxiliaresPorRol[];
  reglasDeNegocioPorRol?: IReglasDeNegocioPorRol[];
  tareasCrediboardPorRol?: ITareasCrediboardPorRol[];
  tiposDeMovimientoContablePorRol?: ITiposDeMovimientoContablePorRol[];
}

export interface IFormAddRoleRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationForm>>;
}

export interface IStep {
  id: number;
  label: string;
  description: string;
}

export interface IGeneralInformationForm {
  k_Rol?: number;
  n_Rol: string;
  description: string;
  application: string;
  applicationId: string;
}
interface IGeneralInformation {
  isValid: boolean;
  values: IGeneralInformationForm;
}

interface IAncillaryAccounts {
  isValid: boolean;
}

export interface IInitialiceFormRole {
  id: string;
  value: string;
  isActive: boolean;
}

export interface IOptionInitialiceForm {
  isValid?: boolean;
  values: IInitialiceFormRole[];
}

export interface IFormAddRole {
  generalInformation: IGeneralInformation;
  ancillaryAccounts: IAncillaryAccounts;
  transactionTypes: IOptionInitialiceForm;
  businessRules: IOptionInitialiceForm;
  crediboardTasks: IOptionInitialiceForm;
  useCases: IOptionInitialiceForm;
}

export interface IApplication {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  k_Uso: string;
  n_Uso: string;
}

export type IHandleChangeFormData = IGeneralInformationForm;
