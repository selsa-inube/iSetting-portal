import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormikProps } from "formik";

import { IGeneralInformationEntry } from "../components/GeneralInformationForm";
import { stepsAddPosition } from "./config/addPosition.config";
import { IFormAddPosition, IFormAddPositionRef } from "./types";
import { initalValuesPositions } from "./config/initialValues";
import { addPositionStepsRules } from "./utils";
import { AddPositionUI } from "./interface";

import { IMessageState } from "../../types/forms.types";

export function AddPosition() {
  const [currentStep, setCurrentStep] = useState<number>(
    stepsAddPosition.generalInformation.id
  );

  const steps = Object.values(stepsAddPosition);
  const [loading, setLoading] = useState(false);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const navigate = useNavigate();

  const [dataAddPositionLinixForm, setDataAddPositionLinixForm] =
    useState<IFormAddPosition>({
      generalInformation: {
        isValid: false,
        values: initalValuesPositions.generalInformation,
      },
    });

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const formReferences: IFormAddPositionRef = {
    generalInformation: generalInformationRef,
  };

  const handleStepChange = (stepId: number) => {
    const newAddPosition = addPositionStepsRules(
      currentStep,
      dataAddPositionLinixForm,
      formReferences,
      isCurrentFormValid
    );

    setDataAddPositionLinixForm(newAddPosition);

    const changeStepKey = Object.entries(stepsAddPosition).find(
      ([, config]) => config.id === currentStep
    )?.[0];

    if (!changeStepKey) return;

    const changeIsVerification = stepId === steps.length;

    setIsCurrentFormValid(
      changeIsVerification ||
        newAddPosition[changeStepKey as keyof IFormAddPosition]?.isValid ||
        currentStep === 3 ||
        false
    );

    setCurrentStep(stepId);

    document.getElementsByTagName("main")[0].scrollTo(0, 0);
  };

  const handleNextStep = () => {
    if (currentStep === steps.length) {
      handleToggleModal();
    }
    if (currentStep + 1 <= steps.length && isCurrentFormValid) {
      handleStepChange(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    handleStepChange(currentStep - 1);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
    setLoading(true);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
    navigate("/privileges/positions");
  };

  return (
    <AddPositionUI
      steps={steps}
      currentStep={currentStep}
      isCurrentFormValid={isCurrentFormValid}
      dataAddPositionLinixForm={dataAddPositionLinixForm}
      formReferences={formReferences}
      showModal={showModal}
      loading={loading}
      message={message}
      setIsCurrentFormValid={setIsCurrentFormValid}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      setCurrentStep={setCurrentStep}
      handleToggleModal={handleToggleModal}
      handleCloseSectionMessage={handleCloseSectionMessage}
    />
  );
}
