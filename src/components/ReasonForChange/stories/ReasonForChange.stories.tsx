import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { ReasonForChange, ReasonForChangeProps } from "..";

const meta: Meta<typeof ReasonForChange> = {
  title: "components/ReasonForChange",
  component: ReasonForChange,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof ReasonForChange>;

export const Default: Story = (args: ReasonForChangeProps) => (
  <ReasonForChange {...args} />
);
Default.args = {
  label: "Motivo del cambio",
  onHandleChange: () => {},
  placeholder: "Escribe aquí el motivo del cambio",
  required: false,
  value: "",
};

export default meta;
