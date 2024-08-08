import { Text } from "@inubekit/text";
import { basic } from "@design/tokens"

interface MenuHeadingProps {
  title: string;
}

function MenuHeading(props: MenuHeadingProps) {
  const { title } = props;

  return (
    <Text
      type="title"
      size="small"
      appearance="gray"
      padding= {`${basic.spacing.s16} ${basic.spacing.s16} ${basic.spacing.s8} ${basic.spacing.s16}`}
    >
      {title}
    </Text>
  );
}

export type { MenuHeadingProps };
export { MenuHeading };
