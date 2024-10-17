import { Text } from "@inubekit/text";
import { StyledBoxAttribute } from "./styles";

export interface BoxAttributeProps {
  attribute: string;
  value: string | number;
}

export function BoxAttribute(props: BoxAttributeProps) {
  const { attribute, value } = props;

  return (
    <StyledBoxAttribute>
      <Text type="label" size="medium">
        {attribute}
      </Text>
      <Text size="medium">{value}</Text>
    </StyledBoxAttribute>
  );
}
