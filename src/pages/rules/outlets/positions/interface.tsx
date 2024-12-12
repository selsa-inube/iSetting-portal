import { useLocation } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/button";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { PageTitle } from "@components/PageTitle";
import { basic } from "@design/tokens";
import { isMobile580 } from "@config/environment";
// import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { privilegeOptionsConfig } from "@pages/privileges/config/privileges.config";
import {  BusinessRules } from "@isettingkit/business-rules";
import { Assisted } from "@inubekit/assisted";
import { IRuleDecision } from "@isettingkit/input";
import { useState } from "react";
import { stepsMock } from "./config/stepmock";
import { decisionTemplate } from "./config/formMock";
import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";

interface IPositionsUI {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPosition: string;
  loading: boolean;
  data: IPosition[];
  decisions: IRuleDecision[];
  isModalOpen: boolean;
  selectedDecision: IRuleDecision | null;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleSubmitForm: (dataDecision: IRuleDecision) => void;
  handleDelete: (id: string) => void;
  handleView: (decision: IRuleDecision) => void;
  layoutMode?: "default" | "centered";
}

function PositionsUI(props: IPositionsUI) {
  const {
    loading,
    decisions,
    isModalOpen,
    selectedDecision,
    handleOpenModal,
    handleCloseModal,
    handleSubmitForm,
    handleDelete,

    layoutMode
  } = props;

  const smallScreen = useMediaQuery(isMobile580);
  // const mediumScreen = useMediaQuery("(max-width: 1300px)");
  const location = useLocation();
  const label = privilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );
  const [currentStepNumber] = useState(3);

  const stepsList = Object.values(stepsMock);
  const currentStep = stepsList.find(
    (step: { number: number }) => step.number === currentStepNumber
  );

  // const templateColumns = layoutMode === "centered"
  //   ? smallScreen
  //     ? "repeat(1, minmax(332px, 1fr))"
  //     : mediumScreen
  //       ? "repeat(2, minmax(332px, 1fr))"
  //       : "repeat(3, minmax(332px, 1fr))"
  //   : "repeat(auto-fill, minmax(300px, 1fr))";


  // const getModalDisplayData = () => {
  //   const data = selectedDecision || getData();

  //   if (conditionReplacement) {
  //     const conditionToDisplay = data.conditions.find(
  //       (condition) => condition.name === conditionReplacement
  //     );
  //     if (conditionToDisplay) {
  //       return {
  //         ...data,
  //         name: conditionToDisplay.name,
  //         dataType: conditionToDisplay.dataType,
  //         value: conditionToDisplay.value,
  //         valueUse: conditionToDisplay.valueUse,
  //         possibleValue: conditionToDisplay.possibleValue,
  //         conditions: data.conditions.filter(
  //           (condition) => condition.name !== conditionReplacement
  //         ),
  //       };
  //     }
  //   }

  //   return data;
  // };

  // const getModalDisplayData = (decision: IRuleDecision) => {
  //   const data: any = decision || getData();
  //   const conditionToDisplay = data.conditions?.find((condition: any) => condition.switchPlaces);
  //   if (conditionToDisplay) {
  //     return {
  //       ...data,
  //       name: conditionToDisplay.name,
  //       dataType: conditionToDisplay.dataType,
  //       value: conditionToDisplay.value,
  //       valueUse: conditionToDisplay.valueUse,
  //       possibleValue: conditionToDisplay.possibleValue,
  //       conditions: data.conditions.map((condition: { name: any; }) =>
  //         condition.name === conditionToDisplay.name
  //           ? { ...condition, hidden: true }
  //           : condition
  //       ),
  //     };
  //   }

  //   return data;
  // };

  return (
    <Stack
      direction="column"
      width={layoutMode === "centered" ? "auto" : "-webkit-fill-available"}
      padding={
        smallScreen
          ? `${basic.spacing.s24}`
          : `${basic.spacing.s32} ${basic.spacing.s64}`
      }
      alignItems={layoutMode === "centered" ? "center" : undefined}
    >
      <Stack gap={basic.spacing.s48} direction="column">
        <Stack gap={basic.spacing.s24} direction="column">
          {label && (
            <>
              <Breadcrumbs crumbs={label.crumbs} />
              <PageTitle
                title={label.label}
                description={label.description}
                navigatePage="/privileges/options"
              />
            </>
          )}
        </Stack>
        <Stack direction="column" gap="4px">
          <Text type="title" size={smallScreen ? "medium" : "large"}>
            Evaluacion Crediticia
          </Text>
          <Text
            type="body"
            size={smallScreen ? "medium" : "small"}
            appearance="gray"
          >
            Completa la información para evaluar la viabilidad del crédito
          </Text>
        </Stack>
        <Stack gap={basic.spacing.s32} direction="column"  >
          <Assisted
            step={currentStep!}
            totalSteps={stepsList.length}
            onBackClick={() => { }}
            onNextClick={() => { }}
            onSubmitClick={() => { }}
            size={smallScreen ? "small" : "large"}
            controls={{
              goBackText: "Anterior",
              goNextText: "Siguiente",
              submitText: "Enviar",
            }}
          />
          {/* <Text type="title" size="medium" appearance="gray">
             Asegurate de agregar una decision para cada una de las tasas de interes para que la evaluacion se realice correctamente.
          </Text> */}
           {/* <Text  as="span" type="title" size="medium" appearance="gray">
             Asegurate de  <Text
                  as="span"
                  type="label"
                  size="large"
                  appearance="dark"
                  weight="bold"
                >
                  Agregar una decision
                </Text> para cada una de las tasas de interes para que la evaluacion se realice correctamente.
          </Text> */}
          {/* <Text  as="span" type="title" size="medium" appearance="gray">
             Asegurate de  <Text
                  as="span"
                  type="label"
                  size="large"
                  appearance="primary"
                  weight="bold"
                >
                  Agregar una decision
                </Text> para cada una de las tasas de interes para que la evaluacion se realice correctamente.
          </Text> */}
          <Stack justifyContent="flex-end" alignItems="center">
          {/* <Stack justifyContent="space-between" alignItems="center">
            <Stack width="450px"> */}
           {/* <Text type="title" size="medium" appearance="gray">
             Asegurate de agregar una decision para cada una de las tasas de interes para que la evaluacion se realice correctamente.
          </Text>  */}
                    {/* <Text  as="span" type="title" size="medium" appearance="gray">
             Asegurate de  <Text
                  as="span"
                  type="label"
                  size="large"
                  appearance="dark"
                  weight="bold"
                >
                  Agregar una decision
                </Text> para cada una de las tasas de interes para que la evaluacion se realice correctamente.
          </Text> */}
          {/* <Text  as="span" type="title" size="medium" appearance="gray">
             Asegurate de  <Text
                  as="span"
                  type="label"
                  size="large"
                  appearance="primary"
                  weight="bold"
                >
                  Agregar una decision
                </Text> para cada una de las tasas de interes para que la evaluacion se realice correctamente.
          </Text> */}
          {/* </Stack>  */}
            <Button
              iconBefore={<MdAddCircleOutline />}
              spacing="wide"
              onClick={handleOpenModal}
              fullwidth={smallScreen}
            >
              Agregar decisión
            </Button>
          </Stack>
          {/* <Text type="title" size="medium" appearance="gray">
             Asegurate de agregar una decision para cada una de las tasas de interes para que la evaluacion se realice correctamente.
          </Text> */}
          {/* <Text  as="span" type="title" size="medium" appearance="gray">
             Asegurate de  <Text
                  as="span"
                  type="label"
                  size="large"
                  appearance="dark"
                  weight="bold"
                >
                  Agregar una decision
                </Text> para cada una de las tasas de interes para que la evaluacion se realice correctamente.
          </Text> */}
          {/* <Text  as="span" type="title" size="medium" appearance="gray">
             Asegurate de  <Text
                  as="span"
                  type="label"
                  size="large"
                  appearance="primary"
                  weight="bold"
                >
                  Agregar una decision
                </Text> para cada una de las tasas de interes para que la evaluacion se realice correctamente.
          </Text> */}
            <BusinessRules
              decisions={decisions}
              textValues={{
                          selectOptions: "Seleccione las opciones",
                          selectOption: "Seleccione una opción",
                          rangeMin: (label: string) => `${label} Minima`,
                          rangeMax: (label: string) => `${label} Maxima`,
                          reasonForChange: "Motivo del cambio",
                          change: "Cambio",
                          changePlaceholder: "Describa brevemente el motivo del cambio",
                          termStart: "Fecha de inicio",
                          termEnd: "Fecha de fin",
                          cancel: "Cancelar",
                          confirm: "Confirmar",
                          none: "Ninguno",
                          factsThatConditionIt: "Condiciones que lo determinan",
                          criteria: "Criterios",
                          terms: "Vigencia",
                        }}
              decisionTemplate={decisionTemplate}
              isModalOpen={isModalOpen}
              selectedDecision={selectedDecision}
              loading={loading}
              handleOpenModal={handleOpenModal}
              handleCloseModal={handleCloseModal}
              handleSubmitForm={handleSubmitForm}
              handleDelete={handleDelete}
            />
        </Stack>
      </Stack>
    </Stack>
  );
}

export {PositionsUI};
export type {IPositionsUI};