import React from "react";

import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { basic } from "@design/tokens";

import { StyledFieldset } from "./styles";
export interface FieldsetProps {
  title: string;
  children: JSX.Element;
  icon?: JSX.Element;
  fieldsetRef?: React.MutableRefObject<HTMLFieldSetElement>;
}

function Fieldset(props: FieldsetProps) {
  const { title, children, icon, fieldsetRef } = props;

  return (
    <StyledFieldset ref={fieldsetRef}>
      <legend>
        <Stack padding={basic.spacing.s4} alignItems="center">
          <Icon icon={icon} appearance="gray" />
          <Text type="title" size="small" appearance="gray">
            {title}
          </Text>
        </Stack>
      </legend>
      {children}
    </StyledFieldset>
  );
}

export { Fieldset };
