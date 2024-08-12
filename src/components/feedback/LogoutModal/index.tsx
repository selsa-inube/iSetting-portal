  import { Button } from "@inubekit/button";
  import { Blanket } from "@inubekit/blanket";
  import { Stack } from "@inubekit/stack";
  import { Text } from "@inubekit/text";
  import { Icon } from "@inubekit/icon";
  import { useMediaQuery } from "@inubekit/hooks";
  import { isMobile743 } from "@src/config/environment";

  import { StyledBackdropBlanket, StyledModal } from "./styles";
  import { MdClose } from "react-icons/md";
  import { Link } from "react-router-dom";
  import { basic } from "@design/tokens";
  
  interface ILogoutModalProps {
    handleShowBlanket: () => void;
    logoutPath: string;
  }
  
  function LogoutModal(props: ILogoutModalProps) {
    const { logoutPath, handleShowBlanket } = props;
    const smallScreen = useMediaQuery(isMobile743);
  
    return (
      <StyledBackdropBlanket>
        <Blanket>
          <StyledModal $smallScreen={smallScreen}>
            <Stack direction="column" gap={basic.spacing.s24} padding={basic.spacing.s24}>
              <Stack direction="column" gap={basic.spacing.s24}>
                <Stack direction="row" justifyContent="space-between">
                  <Text
                    type="title"
                    size={smallScreen ? "small" : "medium"}
                    appearance="dark"
                  >
                    Cerrar sesión
                  </Text>
                  <Icon
                    appearance="dark"
                    icon={<MdClose />}
                    size={smallScreen ? "20px" : "24px"}
                    onClick={handleShowBlanket}
                  />
                </Stack>
  
                <Text size={smallScreen ? "small" : "large"} appearance="gray">
                  ¿Realmente quieres cerrar sesión?
                </Text>
              </Stack>
              <Stack justifyContent="flex-end" gap={basic.spacing.s8}>
                <Button
                  appearance="gray"
                  spacing={smallScreen ? "compact" : "wide"}
                  onClick={handleShowBlanket}
                >
                  Cancelar
                </Button>
                <Link to={logoutPath}>
                  <Button
                    appearance="primary"
                    spacing={smallScreen ? "compact" : "wide"}
                    onClick={handleShowBlanket}
                  >
                    Cerrar sesión
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </StyledModal>
        </Blanket>
      </StyledBackdropBlanket>
    );
  }
  
  export { LogoutModal };
  export type { ILogoutModalProps };
  