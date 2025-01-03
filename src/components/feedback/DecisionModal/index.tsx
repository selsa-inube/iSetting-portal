import { useState } from "react";
import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";

import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Blanket } from "@inubekit/blanket";
import { Icon } from "@inubekit/icon";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";
import { basic } from "@design/tokens";
import { isMobile580 } from "@config/environment";

import { StyledModal } from "./styles";

interface IDecisionModal {
  title: string;
  portalId: string;
  description: string;
  actionText: string;
  loading?: boolean;
  closeModal: () => void;
  handleClick: () => void;
}

const DecisionModal = (props: IDecisionModal) => {
  const {
    title,
    portalId,
    description,
    actionText,
    loading = true,
    closeModal,
    handleClick,
  } = props;
  const [isLoading, setIsLoading] = useState(false);

  const smallScreen = useMediaQuery(isMobile580);

  const handleIsLoading = () => {
    setIsLoading(loading);
  };

  const handleConfirmationClick = () => {
    handleIsLoading();

    setTimeout(
      () => {
        closeModal();
        handleClick();
      },
      !loading ? 0 : 1000
    );
  };

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={smallScreen}>
        <Stack
          direction="column"
          gap={smallScreen ? `${basic.spacing.s16}` : `${basic.spacing.s24}`}
          padding={
            smallScreen ? `${basic.spacing.s24}` : `${basic.spacing.s32}`
          }
        >
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="title" size={smallScreen ? "small" : "large"}>
              {title}
            </Text>
            <Icon
              icon={<MdClear />}
              appearance="dark"
              size="24px"
              onClick={closeModal}
            />
          </Stack>
          <Text appearance="gray" size={smallScreen ? "medium" : undefined}>
            {description}
          </Text>
          <Stack justifyContent="flex-end" gap={basic.spacing.s8}>
            <Button
              appearance="gray"
              onClick={closeModal}
              spacing={smallScreen ? "compact" : undefined}
            >
              Cancel
            </Button>
            <Button
              loading={isLoading}
              onClick={handleConfirmationClick}
              spacing={smallScreen ? "compact" : undefined}
            >
              {actionText}
            </Button>
          </Stack>
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { DecisionModal };
export type { IDecisionModal };
