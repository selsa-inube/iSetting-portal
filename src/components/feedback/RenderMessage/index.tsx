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
  const { message } = props;
  if (!message.data) return null;

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="100%">
        <Flag
          id="flag"
          appearance={"success"}
          description={message.data.description}
          duration={4000}
          title={message.data.title}
        />
      </Stack>
    </StyledMessageContainer>
  );
};

export { RenderMessage };
export type { IRenderMessageProps };
