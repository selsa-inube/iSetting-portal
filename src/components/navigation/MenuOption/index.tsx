import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { basic } from "@design/tokens";
import { StyledOption } from "./styles";

interface MenuOptionProps {
  label: string;
  icon?: JSX.Element;
  handleClick: () => void;
}

function MenuOption(props: MenuOptionProps) {
  const { label, icon, handleClick } = props;

  return (
    <StyledOption onClick={handleClick} type="button">
      <Stack gap={basic.spacing.s12} alignItems="center">
        {icon}
        <Text size="small">{label}</Text>
      </Stack>
    </StyledOption>
  );
}

export { MenuOption };
export type { MenuOptionProps };
