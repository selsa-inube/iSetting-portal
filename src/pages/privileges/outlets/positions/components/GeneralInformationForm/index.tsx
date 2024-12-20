/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useImperativeHandle, useState, useEffect } from "react";

import * as Yup from "yup";
import { validationMessages } from "@validations/validationMessages";
import { IMessageState } from "@pages/privileges/outlets/types/forms.types";

import { FormikProps, useFormik } from "formik";
import { GeneralInformationFormUI } from "./interface";
import { generalMessage } from "../../add-position/config/messages.config";
import { IHandleUpdateDataSwitchstep } from "../../add-position/types";
export interface IGeneralInformationEntry {
  abbreviatedName: string;
  nUso: string;
}

const validationSchema = Yup.object({
  abbreviatedName: Yup.string().required(validationMessages.required),
  nUso: Yup.string().required(validationMessages.required),
});

interface IGeneralInformationFormProps {
  initialValues: IGeneralInformationEntry;
  id?: string;
  loading?: boolean;
  withSubmitButtons?: boolean;
  handleSubmit?: (values: IHandleUpdateDataSwitchstep) => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onHasChanges?: (hasChanges: boolean) => void;
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: IGeneralInformationFormProps,
    ref: React.Ref<FormikProps<IGeneralInformationEntry>>
  ) {
    const {
      initialValues,
      withSubmitButtons,
      handleSubmit,
      onFormValid,
      onHasChanges,
    } = props;

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<IMessageState>({
      visible: false,
    });

    const formik = useFormik({
      initialValues,
      validationSchema,
      validateOnBlur: false,
      onSubmit: () => {
        setLoading(true);
        setTimeout(() => {
          handleSubmit && handleSubmit(formik.values);
          setLoading(false);
          setMessage({
            visible: true,
            data: generalMessage.success as any,
          });
        });
      },
    });

    useImperativeHandle(ref, () => formik);

    const handleCloseSectionMessage = () => {
      setMessage({
        visible: false,
      });
    };

    const handleSubmitForm = () => {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length > 0) {
          setMessage({
            visible: true,
            data: generalMessage.failed as any,
          });
        }

        formik.handleSubmit();
      });
    };

    const disabledButtons = (valueCompare: IGeneralInformationEntry) =>
      JSON.stringify(formik.initialValues) !== JSON.stringify(valueCompare);

    const handleChangeForm = (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      if (onHasChanges) onHasChanges(disabledButtons(formik.values));
      formik
        .setFieldValue(event.target.name, event.target.value)
        .then((errors) => {
          if (withSubmitButtons) return;

          if (!errors || Object.keys(errors).length === 0) {
            handleSubmit &&
              handleSubmit({
                ...formik.values,
                [event.target.name]: event.target.value,
              });
          }
        });
    };

    useEffect(() => {
      if (formik.values) {
        formik.validateForm().then((errors) => {
          onFormValid && onFormValid(Object.keys(errors).length === 0);
        });
      }
    }, [formik.values, onFormValid]);

    return (
      <GeneralInformationFormUI
        formik={formik}
        message={message}
        disabledButtons={disabledButtons}
        handleCloseSectionMessage={handleCloseSectionMessage}
        handleChangeForm={handleChangeForm}
        handleSubmitForm={handleSubmitForm}
        handleReset={handleCloseSectionMessage}
        loading={loading}
        withSubmitButtons={withSubmitButtons}
      />
    );
  }
);
