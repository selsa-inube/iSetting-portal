import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import { Blanket } from "@inubekit/blanket";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

import { basic } from "@design/tokens";
import { StyledContainer, StyledModal } from "./styles";

export interface RulesConfigurationProps {
    children: React.ReactNode;
    onCloseModal: () => void;
    portalId: string;
    title: string;
}

export const RulesConfiguration = (props: RulesConfigurationProps) => {
    const { children, portalId, onCloseModal, title } = props;
    const node = document.getElementById(portalId);
    if (!node) {
        throw new Error(
            "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
        );
    }
    return createPortal(
        <StyledContainer>
            <Blanket>
                <StyledModal>
                    <Stack direction="column" gap={basic.spacing.s24}>
                        <Stack direction="column" gap={basic.spacing.s24}>
                            <Stack
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Text
                                    type="title"
                                    size="large"
                                    appearance="dark"
                                    weight="bold"
                                >
                                    {title}
                                </Text>
                                <MdClear
                                    size="24px"
                                    cursor="pointer"
                                    onClick={onCloseModal}
                                />
                            </Stack>
                        </Stack>

                        {children}
                    </Stack>
                </StyledModal>
            </Blanket>
        </StyledContainer>,
        node
    );
};
