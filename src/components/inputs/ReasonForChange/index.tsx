import { useState } from "react";

import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Textarea } from "@inubekit/textarea";

import { basic } from "@design/tokens";

interface ReasonForChangeProps {
  label: string;
  labelText: string;
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required: boolean;
  value?: string;
}

export const ReasonForChange = (props: ReasonForChangeProps) => {
  const {
    label,
    labelText,
    onHandleChange,
    placeholder,
    required,
    value = "",
  } = props;

  const [valueTextarea, setTextarea] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextarea(event.target.value);
    onHandleChange(event);
  };

  return (
    <Stack
      direction="column"
      margin={`${basic.spacing.s10} ${basic.spacing.s4}`}
    >
      <Text
        size="large"
        appearance="gray"
        weight="bold"
        margin={`${basic.spacing.s10} ${basic.spacing.s0}`}
      >
        {labelText}
      </Text>
      <Stack margin={`${basic.spacing.s10} ${basic.spacing.s0}`}>
        <Textarea
          id="reasonChange"
          label={label}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          value={valueTextarea}
          maxLength={120}
          fullwidth
        />
      </Stack>
    </Stack>
  );
};

export type { ReasonForChangeProps };
