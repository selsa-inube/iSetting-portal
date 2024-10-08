import { Stack } from "@inubekit/stack";
import { Flag } from "@inubekit/flag";
import { StyledMessageContainer } from "./styles";
import { IUsersMessage } from "@pages/privileges/outlets/types/users.types";

interface IRenderMessageProps {
  message: IUsersMessage;
  handleCloseMessage: () => void;
  onMessageClosed: () => void;
}

const RenderMessage = (props: IRenderMessageProps) => {
  const { message, handleCloseMessage, onMessageClosed } = props;
  if (!message.data) return null;

  const closeMessageAndExecuteCallback = () => {
    handleCloseMessage();
    onMessageClosed();
  };

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="100%">
        <Flag
          appearance={"success"}
          closeFlag={closeMessageAndExecuteCallback}
          description={message.data.description}
          duration={4000}
          icon={message.data.icon}
          title={message.data.title}
          isMessageResponsive
        />
      </Stack>
    </StyledMessageContainer>
  );
};

export { RenderMessage };
export type { IRenderMessageProps };
