import { useSelectBusinessUnits } from "@hooks/useSelectBusinessUnits";
import { SelectBusinessUnitsUI } from "./interface";

const SelectBusinessUnits = () => {
  useSelectBusinessUnits();

  return <SelectBusinessUnitsUI />;
};

export { SelectBusinessUnits };
