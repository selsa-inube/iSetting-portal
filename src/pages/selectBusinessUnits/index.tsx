import { useSelectBusinessUnits } from "@hooks/useSelectBusinessUnits";
import { SelectBusinessUnitsUI } from "./interface";

function SelectBusinessUnits() {
  useSelectBusinessUnits();

  return <SelectBusinessUnitsUI />;
}

export { SelectBusinessUnits };
