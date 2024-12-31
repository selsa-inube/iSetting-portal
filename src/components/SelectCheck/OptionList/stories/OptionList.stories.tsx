import type { Meta, StoryObj } from "@storybook/react";
import { parameters, props } from "./props";
import { OptionList } from "..";
import { OptionItemChecked } from "@components/SelectCheck/OptionItem";

type Story = StoryObj<typeof OptionList>;

const options = [
  { id: "1", label: "Item 1", checked: false },
  { id: "2", label: "Item 2", checked: true },
  { id: "3", label: "Item 3", checked: false },
];

const meta: Meta<typeof OptionList> = {
  title: "components/inputs/SelectCheck/OptionList",
  component: OptionList,
  parameters,
  argTypes: props,
};

export default meta;

export const Default: Story = {
  args: {
    children: options.map((optionItem) => (
      <OptionItemChecked
        key={optionItem.id}
        id={optionItem.id}
        label={optionItem.label}
        checked={optionItem.checked}
      />
    )),
  },
};