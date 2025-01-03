import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { Avatar } from "@inubekit/avatar";
import { basic } from "@design/tokens";

interface MenuUserProps {
  userName: string;
  businessUnit?: string;
  avatar?: boolean;
}

function MenuUser(props: MenuUserProps) {
  const { userName, businessUnit = "Linix", avatar = true } = props;

  return (
    <Stack
      gap={basic.spacing.s12}
      padding={`${basic.spacing.s12} ${basic.spacing.s16}`}
    >
      {avatar && (
        <Stack direction="column" justifyContent="center">
          <Avatar />
        </Stack>
      )}
      <Stack direction="column" justifyContent="center">
        <Text type="body" size="medium">
          {userName}
        </Text>
        <Text type="body" size="small" appearance="gray">
          {businessUnit}
        </Text>
      </Stack>
    </Stack>
  );
}

export { MenuUser };
export type { MenuUserProps };
