import { FormikProps } from "formik";
import { useMediaQuery } from "@inubekit/hooks";

import { Stack } from "@inubekit/stack";
import { Textarea } from "@inubekit/textarea";
import { Input } from "@inubekit/input";

import { basic } from "@design/tokens";
import { getFieldState } from "@utils/forms";

import { StyledContainer, StyledContainerFields } from "./styles";
import { IGeneralInformationEntry } from "./types";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  onNextStep: () => void;
  loading?: boolean;
}

const GeneralInformationFormUI = ({
  formik,
  loading,
}: IGeneralInformationFormUI) => {
  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <StyledContainer>
      <form>
        <Stack direction="column" gap={basic.spacing.s300}>
          <StyledContainerFields $isMobile={isMobile}>
            <Stack direction="column" width="100%" gap={basic.spacing.s250}>
              <Stack
                direction={isMobile ? "column" : "row"}
                gap={basic.spacing.s250}
              >
                <Stack width={isMobile ? "100%" : "350px"}>
                  <Input
                    name="nameCreditLine"
                    id="nameCreditLine"
                    label="Descripción Funcional"
                    placeholder="Nombre del cargo"
                    type="text"
                    size="compact"
                    value={formik.values.nameCreditLine}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={getFieldState(formik, "nameCreditLine")}
                    message={formik.errors.nameCreditLine}
                    fullwidth
                  />
                </Stack>
              </Stack>

              <Textarea
                label="Descripción Funcional"
                placeholder="Agregue una breve descripción"
                name="descriptionCreditLine"
                id="descriptionCreditLine"
                value={formik.values.descriptionCreditLine}
                maxLength={1000}
                disabled={loading}
                status={getFieldState(formik, "descriptionCreditLine")}
                message={formik.errors.descriptionCreditLine}
                fullwidth
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Stack>
          </StyledContainerFields>
        </Stack>
      </form>
    </StyledContainer>
  );
};

export { GeneralInformationFormUI };
