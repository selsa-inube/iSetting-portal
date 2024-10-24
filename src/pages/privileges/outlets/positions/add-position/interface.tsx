import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";

import { isMobile580 } from "@config/environment";
import { PageTitle } from "@components/PageTitle";
import { basic } from "@design/tokens";

import {
  createPositionConfig,
  stepsAddPosition,
} from "./config/addPosition.config";
import {
  IFormAddPosition,
  IFormAddPositionRef,
  IStep,
} from "./types";

import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { StyledContainerAssisted } from "./styles";
import { IMessageState } from "../../types/forms.types";

const renderStepContent = (
  currentStep: number,
  formReferences: IFormAddPositionRef,
  dataAddPositionLinixForm: IFormAddPosition,
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return (
    <>
      {currentStep === stepsAddPosition.generalInformation.id && (
        <GeneralInformationForm
          initialValues={dataAddPositionLinixForm.generalInformation.values}
          ref={formReferences.generalInformation}
          onFormValid={setIsCurrentFormValid}
        />
      )}
    </>
  );
};
interface AddPositionUIProps {
  currentStep: number;
  steps: IStep[];
  showModal: boolean;
  isCurrentFormValid: boolean;
  dataAddPositionLinixForm: IFormAddPosition;
  formReferences: IFormAddPositionRef;
  loading: boolean;
  message: IMessageState;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleToggleModal: () => void;
  handleCloseSectionMessage: () => void;
}

export function AddPositionUI(props: AddPositionUIProps) {
  const {
    currentStep,
    steps,
    formReferences,
    dataAddPositionLinixForm,
    isCurrentFormValid,
    setIsCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
  } = props;

  const smallScreen = useMediaQuery(isMobile580);
  const disabled = !isCurrentFormValid;

  return (
    <Stack
      direction="column"
      padding={
        smallScreen
          ? `{${basic.spacing.s16}}`
          : `${basic.spacing.s32} ${basic.spacing.s64}`
      }
    >
      <Stack gap={basic.spacing.s48} direction="column">
        <Stack gap={basic.spacing.s32} direction="column">
          <Breadcrumbs crumbs={createPositionConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={basic.spacing.s50}
          >
            <PageTitle
              title={createPositionConfig[0].title}
              description={createPositionConfig[0].description}
              navigatePage="/privileges/positions"
            />
          </Stack>
        </Stack>
        <>
          <StyledContainerAssisted $cursorDisabled={disabled}>
            {/* <Assisted
              step={steps}
              currentStepId={currentStep}
              handlePrev={handlePreviousStep}
              handleNext={handleNextStep}
              titleButtonText={titleButtonTextAssited}
            /> */}
          </StyledContainerAssisted>
          {renderStepContent(
            currentStep,
            formReferences,
            dataAddPositionLinixForm,
            setIsCurrentFormValid
          )}
        </>
        <Stack gap={basic.spacing.s16} justifyContent="flex-end">
          <Button
            onClick={handlePreviousStep}
            type="button"
            disabled={currentStep === steps[0].id}
            spacing="compact"
            variant="none"
            appearance="gray"
          >
            Atrás
          </Button>
          <Button
            onClick={handleNextStep}
            spacing="compact"
            disabled={disabled}
          >
            {currentStep === steps.length ? "Confirmar" : "Siguiente"}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
