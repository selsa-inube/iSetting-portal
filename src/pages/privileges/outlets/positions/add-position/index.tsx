import { useAddStaffRoles } from "@hooks/positionsData/useAddStaffRoles";
import { addStaffRolesSteps } from "./config/addPosition.config";
import { AddStaffRolesUI } from "./interface";

const AddPosition = () => {
  const {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
  } = useAddStaffRoles();

  return (
    <AddStaffRolesUI
      currentStep={currentStep}
      generalInformationRef={generalInformationRef}
      initialGeneralInformationValues={formValues}
      isCurrentFormValid={isCurrentFormValid}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      setIsCurrentFormValid={setIsCurrentFormValid}
      steps={addStaffRolesSteps}
      handlePreviousStep={handlePreviousStep}
      handleNextStep={handleNextStep}
    />
  );
};

export { AddPosition };
