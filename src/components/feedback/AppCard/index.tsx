import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { basic } from "@design/tokens";
import { SkeletonIcon, SkeletonLine } from "@inubekit/skeleton";
import { StyledAppCard } from "./styles";

interface AppCardProps {
  description?: string;
  icon?: React.ReactNode;
  label?: string;
  url?: string;
  isLoading?: boolean;
}

function AppCard({ label, description, icon, url, isLoading }: AppCardProps) {
  if (isLoading) {
    return (
      <StyledAppCard to={url ?? ""}>
        <Stack direction="column" gap={basic.spacing.s200}>
          <Stack width="70%">
            <SkeletonLine animated />
          </Stack>
          <Stack width="100%">
            <SkeletonLine animated />
          </Stack>
        </Stack>
        <Stack justifyContent="flex-end">
          <SkeletonIcon animated />
        </Stack>
      </StyledAppCard>
    );
  }

  return (
    <StyledAppCard to={url ?? ""}>
      <Stack direction="column" gap={basic.spacing.s200}>
        <Text type="title" size="medium" weight="bold">
          {label}
        </Text>
        <Text type="body" size="small">
          {description}
        </Text>
      </Stack>
      <Stack justifyContent="flex-end">
        <Icon icon={icon} appearance="dark" size="24px" cursorHover />
      </Stack>
    </StyledAppCard>
  );
}

export { AppCard };
export type { AppCardProps };
