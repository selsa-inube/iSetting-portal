import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  ICondition,
  IDecision,
  IRuleDecision,
  IValue,
  ValueHowToSetUp,
} from "@src/pages/rules/types";
import { RulesConfiguration } from "@src/components/modals/RulesConfiguration";
import { DecisionModalEditUI } from "./interface";

export interface DecisionModalEditProps {
  decision: IRuleDecision;
  onCloseModal: () => void;
  onCancel: () => void;
  onSubmitEvent: (dataDecision: IRuleDecision) => void;
  portalId: string;
}

const updateDataDecision = (
  prevDataDecision: IRuleDecision,
  field: string,
  value: IValue | Date
) => {
  return {
    ...prevDataDecision,
    decision: { ...prevDataDecision.decision, [field]: value },
  };
};

interface TypeDataOutput {
  schema: Yup.StringSchema | Yup.NumberSchema;
  value: string | number | { rangeFrom: number; rangeTo: number } | undefined;
}

const typeData = (element: IDecision | ICondition):TypeDataOutput | undefined => {
  const value =element.possibleValue;
  switch (element.howToSetUp) {
    case ValueHowToSetUp.LIST_OF_VALUES:
      return {
        schema: Yup.string(),
        value: value.listSelected?.[0]
      };
    case ValueHowToSetUp.LIST_OF_VALUES_MULTI:
      return {
        schema: Yup.string(),
        value: ""
      };
    case ValueHowToSetUp.RANGE:
      return {
        schema: Yup.number(),
        value: { rangeFrom: value?.rangeFrom as number || 0, rangeTo: value?.rangeTo as number || 0 }
      };
    case ValueHowToSetUp.GREATER_THAN:
    case ValueHowToSetUp.LESS_THAN:
    case ValueHowToSetUp.EQUAL:
      return {
        schema: Yup.string().required("Required"),
        value: value.value
      };
    default:
      return {
        schema: Yup.string(),
        value: undefined
      };
      
  }
};

const ValueValidationSchema = (decision: IRuleDecision) => {
  const respValue: { [key: string]: Yup.StringSchema | Yup.NumberSchema } = {},
        initialValues: { [key: string]: string | number | { rangeFrom: number; rangeTo: number } | undefined  } = {};
  if (decision.decision) {
    const decisionData = typeData(decision.decision);
    if (decisionData) {
      respValue[decision.decision.name] = decisionData.schema;
      initialValues[decision.decision.name] = decisionData.value;
    }
  }
  
  if (decision.conditions) {
    decision.conditions.forEach((condition) => {
      const typeDataResult = typeData(condition);
      if (typeDataResult) {
        respValue[condition.name] = typeDataResult.schema;
        initialValues[condition.name] = typeDataResult.value;
      }
    });
  }
  return {validationSchema: Yup.object().shape(respValue), initialValues};
};


export const DecisionModalEdit = (prop: DecisionModalEditProps) => {
  const { decision, onCloseModal, onCancel, onSubmitEvent, portalId } = prop;
  const [DataDecision, setDataDecision] = useState(decision);
  const onCondition = (value: IValue, nameCondition: string) => {
    setDataDecision((DataDecisionRule) => {
      const conditions = DataDecisionRule?.conditions?.map((condition) => {
        if (condition.name === nameCondition) {
          return { ...condition, value };
        }
        return condition;
      });
      return { ...DataDecisionRule, conditions };
    });
  };
  const onDecision = (value: IValue) => {
    setDataDecision((prevDataDecision) =>
      updateDataDecision(prevDataDecision, "value", value)
    );
  };

  const onStartChange = (value: string) => {
    setDataDecision((prevDataDecision) =>
      updateDataDecision(prevDataDecision, "startDate", new Date(value))
    );
  };

  const onEndChange = (value: string) => {
    setDataDecision((prevDataDecision) =>
      updateDataDecision(prevDataDecision, "endDate", new Date(value))
    );
  };
  const {validationSchema, initialValues} = ValueValidationSchema(DataDecision);

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: async () => true,
  });


  return (
    <RulesConfiguration
      portalId={portalId}
      onCloseModal={onCloseModal}
      title="Configuración"
    >
      <DecisionModalEditUI
        formik={formik}
        decision={DataDecision}
        onCancel={onCancel}
        onSubmit={() => onSubmitEvent(DataDecision)}
        onChangeCondition={onCondition}
        onChangeDecision={onDecision}
        onStartChange={onStartChange}
        onEndChange={onEndChange}
      />
    </RulesConfiguration>
  );
};
