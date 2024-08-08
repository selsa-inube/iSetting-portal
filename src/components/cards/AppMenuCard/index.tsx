import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { StyledAppMenuCard } from "./styles";
import { basic } from "@design/tokens";

interface AppMenuCardProps {
  id: number;
  icon: JSX.Element;
  label: string;
  description: string;
  url: string;
  domain: string;
}

function AppMenuCard(props: AppMenuCardProps) {
  const { icon, label, description, url } = props;
  return (
    <Stack direction="column">
      <StyledAppMenuCard to={url}>
        <Stack gap={basic.spacing.s4} alignItems="center" direction="column">
          <Icon
            appearance="dark"
            cursorHover={true}
            icon={icon}
            spacing="narrow"
            size="24px"
            shape="circle"
          />
          <Stack gap={basic.spacing.s4} direction="column" width="100%">
            <Text textAlign="center" type="title" size="medium">
              {label}
            </Text>
            <Text textAlign="center" size="small" appearance="gray">
              {description}
            </Text>
          </Stack>
        </Stack>
      </StyledAppMenuCard>
    </Stack>
  );
}

export { AppMenuCard };
export type { AppMenuCardProps };
