import { Assisted, IAssistedStep } from "@inubekit/assisted";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { basic } from "@design/tokens";

import { PageTitle } from "@components/PageTitle";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { isMobile580 } from "@config/environment";

import {
  createPositionConfig,
  finishAssistedModalConfig,
  stepsAddPosition,
} from "./config/addPosition.config";
import {
  IFormAddPosition,
  IFormAddPositionRef,
  IOptionInitialiceEntry,
  titleButtonTextAssited,
} from "./types";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { StyledContainerAssisted } from "./styles";
import { InitializerForm } from "../../forms/InitializerForm";
import { VerificationAddPosition } from "../components/VerificationForm";
import { IMessageState } from "@ptypes/forms.types";

const renderStepContent = (
  currentStep: number,
  formReferences: IFormAddPositionRef,
  dataAddPositionLinixForm: IFormAddPosition,
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>,
  handleUpdateDataSwitchstep: (values: IOptionInitialiceEntry[]) => void,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
) => {
  const roles = dataAddPositionLinixForm.roles.values.map((role) => {
    const n_uso = dataAddPositionLinixForm.application.values.find(
      (app) => app.k_uso === role.k_uso
    );
    return {
      ...role,
      n_uso: n_uso?.n_uso,
    };
  });

  return (
    <>
      {currentStep === stepsAddPosition.generalInformation.number && (
        <GeneralInformationForm
          initialValues={dataAddPositionLinixForm.generalInformation.values}
          ref={formReferences.generalInformation}
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === stepsAddPosition.roles.number && (
        <InitializerForm
          dataOptionsForms={roles}
          dataOptionsValueSelect={dataAddPositionLinixForm.application.values}
          handleSubmit={handleUpdateDataSwitchstep}
        />
      )}
      {currentStep === stepsAddPosition.summary.number && (
        <VerificationAddPosition
          steps={dataAddPositionLinixForm}
          setCurrentStep={setCurrentStep}
        />
      )}
    </>
  );
};

interface AddPositionUIProps {
  currentStep: number;
  steps: IAssistedStep[];
  showModal: boolean;
  isCurrentFormValid: boolean;
  dataAddPositionLinixForm: IFormAddPosition;
  formReferences: IFormAddPositionRef;
  loading: boolean;
  message: IMessageState;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleUpdateDataSwitchstep: (values: IOptionInitialiceEntry[]) => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleToggleModal: () => void;
  handleFinishForm: () => void;
  handleCloseSectionMessage: () => void;
  validateActiveRoles: () => boolean;
}

export function AddPositionUI(props: AddPositionUIProps) {
  const {
    currentStep,
    steps,
    showModal,
    isCurrentFormValid,
    dataAddPositionLinixForm,
    formReferences,
    loading,
    message,
    setIsCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
    handleUpdateDataSwitchstep,
    setCurrentStep,
    handleToggleModal,
    handleFinishForm,
    handleCloseSectionMessage,
    validateActiveRoles,
  } = props;

  const { title, description, actionText, appearance } =
    finishAssistedModalConfig;

  const smallScreen = useMediaQuery(isMobile580);
  const disabled = !isCurrentFormValid || validateActiveRoles();

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
            <Assisted
              step={steps[currentStep - 1]}
              totalSteps={steps.length}
              onBackClick={handlePreviousStep}
              onNextClick={handleNextStep}
              onSubmitClick={handleFinishForm}
              size="large"
              controls={titleButtonTextAssited}
              disableNext={!isCurrentFormValid}
            />
          </StyledContainerAssisted>
          {renderStepContent(
            currentStep,
            formReferences,
            dataAddPositionLinixForm,
            setIsCurrentFormValid,
            handleUpdateDataSwitchstep,
            setCurrentStep
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
            {currentStep === steps.length ? "Enviar" : "Siguiente"}
          </Button>
        </Stack>
      </Stack>
      {showModal && (
        <DecisionModal
          portalId="portal"
          title={title}
          description={description}
          actionText={actionText}
          loading={loading}
          appearance={appearance}
          closeModal={handleToggleModal}
          handleClick={handleFinishForm}
        />
      )}
      {message.visible && (
        <RenderMessage
          message={message}
          handleCloseMessage={handleCloseSectionMessage}
          onMessageClosed={handleCloseSectionMessage}
        />
      )}
    </Stack>
  );
}
