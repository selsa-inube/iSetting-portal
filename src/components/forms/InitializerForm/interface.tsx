import { FormButtons } from "@components/submit/FormButtons";
import { AssignmentForm } from "@components/templates/AssignmentForm";
import { IOptionInitialiceEntryApp } from "@pages/privileges/outlets/positions/add-position/types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/types/forms.types";

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

const InitializerFormUI = (props: InitializerFormUIProps) => {
  const {
    dataOptionsForms,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeInitializerForm,
    withSubmitButtons,
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
};

export { InitializerFormUI };
