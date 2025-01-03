import { useState } from "react";
import { updateItemData } from "@mocks/utils/dataMock.service";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/types/forms.types";
import { IOptionInitialiceEntryApp } from "@pages/privileges/outlets/positions/add-position/types";
import { InitializerFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

interface IInitializerForm {
  dataOptionsForms: IAssignmentFormEntry[];
  handleSubmit: (renderForm: IAssignmentFormEntry[]) => void;
  id?: string;
  keyData?: string;
  nameDB?: string;
  property?: string;
  propertyData?: string;
  readOnly?: boolean;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  dataOptionsValueSelect: IOptionInitialiceEntryApp[];
}

const InitializerForm = (props: IInitializerForm) => {
  const {
    dataOptionsForms: initialDataOptionsForms,
    handleSubmit,
    id,
    keyData,
    nameDB,
    property,
    propertyData,
    withSubmitButtons = false,
    onHasChanges,
    readOnly = false,
    dataOptionsValueSelect,
  } = props;

  const [formDataOptions, setFormDataOptions] = useState(
    initialDataOptionsForms
  );
  const [initialFormDataOptions] = useState(initialDataOptionsForms);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(initialDataOptionsForms) !== JSON.stringify(valueCompare);

  const handleChangeRenderForm = (renderForm: IAssignmentFormEntry[]) => {
    setFormDataOptions(renderForm);
    if (onHasChanges) onHasChanges(hasChanges(renderForm));
    if (!withSubmitButtons) handleSubmit(renderForm);
  };

  const normalizeDataOption = formDataOptions
    .filter((dataOption) => dataOption.isActive === true)
    .map((option) => ({
      [propertyData as keyof string]: option.id,
    }));

  const handleEditData = async () => {
    if (nameDB && keyData) {
      await updateItemData({
        key: keyData,
        nameDB: nameDB,
        identifier: id!,
        editData: normalizeDataOption,
        property: property,
      });
    }
  };

  const handleSubmitForm = () => {
    setIsLoading(true);
    setTimeout(() => {
      handleSubmit(formDataOptions);
      handleEditData();
      setIsLoading(false);
      setMessage({
        visible: true,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setFormDataOptions(initialFormDataOptions);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <InitializerFormUI
      handleChangeInitializerForm={handleChangeRenderForm}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      dataOptionsForms={formDataOptions}
      withSubmitButtons={withSubmitButtons}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      readOnly={readOnly}
      dataOptionsValueSelect={dataOptionsValueSelect}
    />
  );
};

export { InitializerForm };
export type { IInitializerForm };
