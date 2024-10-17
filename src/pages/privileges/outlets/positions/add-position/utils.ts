import localforage from "localforage";
import { stepsAddPosition } from "./config/addPosition.config";
import { IFormAddPosition, IFormAddPositionRef, IPosition } from "./types";

const addPositionStepsRules = (
  currentStep: number,
  currentDataAddPositionLinixForm: IFormAddPosition,
  formReferences: IFormAddPositionRef,
  isCurrentFormValid: boolean
) => {
  let newDataAddPositionLinixForm = {
    ...currentDataAddPositionLinixForm,
  };

  const stepKey = Object.entries(stepsAddPosition).find(
    ([, config]) => config.number === currentStep
  )?.[0];

  if (!stepKey) return currentDataAddPositionLinixForm;

  if (stepKey !== "generalInformation") return currentDataAddPositionLinixForm;

  const values = formReferences[stepKey]?.current?.values;

  return (newDataAddPositionLinixForm = {
    ...newDataAddPositionLinixForm,
    [stepKey]: { isValid: isCurrentFormValid, values: values! },
  });
};

export const saveLinixPositions = (addLinixPositions: IFormAddPosition) => {
  const {
    generalInformation: { values: generalInformation },
    roles: { values: roles },
  } = addLinixPositions;

  const normalizeRoles = roles
    .filter((rol) => rol.isActive === true)
    .map((rol) => ({
      k_Rol: rol.value,
    }));

  const newLinixPosition: IPosition = {
    k_Grupo: "",
    n_Grupo: generalInformation.abbreviatedName,
    i_Activo: "Y",
    n_Uso: generalInformation.nUso,
    rolesPorCargo: normalizeRoles,
    public_code: "",
    abbreviated_name: "",
  };
  localforage.getItem("staff-positions").then((data) => {
    if (data) {
      localforage.setItem("staff-positions", [
        ...(data as IFormAddPosition[]),
        newLinixPosition,
      ]);
    } else {
      localforage.setItem("staff-positions", [newLinixPosition]);
    }
  });
};

export { addPositionStepsRules };
