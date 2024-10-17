import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { basic } from "@design/tokens";
import { StyledLink } from "./styles";

interface MenuLinkprops {
  label: string;
  icon?: JSX.Element;
  path: string;
}

function MenuLink(props: MenuLinkprops) {
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
export type { MenuLinkprops };
