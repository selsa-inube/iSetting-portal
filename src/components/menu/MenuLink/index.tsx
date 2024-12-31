import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { basic } from "@design/tokens";
import { StyledLink } from "./styles";

interface IMenuLink {
  label: string;
  icon?: React.ReactNode;
  path: string;
}

function MenuLink(props: IMenuLink) {
  const { label, icon, path } = props;

  return (
    <StyledLink to={path}>
      <Stack gap={basic.spacing.s12} alignItems="center">
        {icon}
        <Text size="small">{label}</Text>
      </Stack>
    </StyledLink>
  );
}

export { MenuLink };
export type { IMenuLink };