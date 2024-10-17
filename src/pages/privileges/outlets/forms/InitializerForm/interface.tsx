import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import { IAssignmentFormEntry, IMessageState } from "@ptypes/forms.types";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { IOptionInitialiceEntryApp } from "../../positions/add-position/types";

interface InitializerFormUIProps {
  dataOptionsForms: IAssignmentFormEntry[];
  dataOptionsValueSelect: IOptionInitialiceEntryApp[];
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeInitializerForm: (
    dataOptionsForms: IAssignmentFormEntry[]
  ) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
  readOnly?: boolean;
  setChangedData?: (changeData: IAssignmentFormEntry[]) => void;
  changeData?: IAssignmentFormEntry[];
}

export function InitializerFormUI(props: InitializerFormUIProps) {
  const {
    dataOptionsForms,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeInitializerForm,
    withSubmitButtons,
    message,
    onCloseSectionMessage,
    hasChanges,
    readOnly,
    setChangedData = () => {},
    changeData = [],
    dataOptionsValueSelect,
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          withDisabledButtons={!hasChanges(dataOptionsForms)}
          handleSubmit={handleSubmitForm}
          handleReset={handleReset}
          loading={isLoading}
        >
          <AssignmentForm
            handleChange={handleChangeInitializerForm}
            entries={dataOptionsForms}
            title="Selecciona los roles:"
            setChangedData={setChangedData}
            changeData={changeData}
            valueSelect={dataOptionsValueSelect}
          />
        </FormButtons>
        {message.visible && (
          <RenderMessage
            message={message}
            handleCloseMessage={onCloseSectionMessage}
            onMessageClosed={handleReset}
          />
        )}
      </>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeInitializerForm}
      entries={dataOptionsForms}
      title="Selecciona los roles:"
      readOnly={readOnly}
      valueSelect={dataOptionsValueSelect}
    />
  );
}
