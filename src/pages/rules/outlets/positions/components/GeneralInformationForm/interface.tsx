import { Grid } from "@inubekit/grid";
import { Textfield } from "@inubekit/textfield";
import { Textarea } from "@inubekit/textarea";
import { IMessageState } from "@pages/privileges/outlets/types/forms.types";
import { FormikValues } from "formik";
import { IGeneralInformationEntry } from ".";
import { basic } from "@design/tokens";

function stateValue(formik: FormikValues, attribute: string) {
  if (!formik.touched[attribute]) return undefined;
  if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
}

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  message: IMessageState;
  disabledButtons: (valueCompare: IGeneralInformationEntry) => boolean;
  handleCloseSectionMessage: () => void;
  handleChangeForm: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmitForm: () => void;
  handleReset: () => void;
  loading?: boolean;
  withSubmitButtons?: boolean;
}

export function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const { formik, handleChangeForm } = props;

  return (
    <>
      <form>
        <Grid
          templateColumns="1fr"
          gap={basic.spacing.s16}
          width="100%"
          autoRows="unset"
        >
          <Textfield
            label="Nombre Cargo"
            placeholder="Nombre del cargo"
            name="abbreviatedName"
            id="abbreviatedName"
            value={formik.values.abbreviatedName}
            type="text"
            size="compact"
            fullwidth
            message={
              stateValue(formik, "abbreviatedName") !== "invalid" &&
              formik.errors.abbreviatedName
            }
            status={stateValue(formik, "abbreviatedName")}
            onBlur={formik.handleBlur}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeForm(event)
            }
            required
          />
          <Textarea
            label="Descripción Funcional"
            placeholder="Agregue una breve descripción"
            name="nUso"
            id="nUso"
            value={formik.values.nUso}
            message={
              stateValue(formik, "nUso") !== "invalid" && formik.errors.nUso
            }
            status={stateValue(formik, "nUso")}
            fullwidth
            maxLength={100}
            onBlur={formik.handleBlur}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeForm(event)
            }
            required
          />
        </Grid>
      </form>
    </>
  );
}
