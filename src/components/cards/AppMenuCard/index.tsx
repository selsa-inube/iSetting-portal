import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { basic } from "@design/tokens";
import { StyledAppMenuCard } from "./styles";

interface IAppMenuCard {
  id: number;
  icon: React.ReactNode;
  label: string;
  description: string;
  url: string;
  domain: string;
}

const AppMenuCard = (props: IAppMenuCard) => {
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
};

export { AppMenuCard };
export type { IAppMenuCard };
