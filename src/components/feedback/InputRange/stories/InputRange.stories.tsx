import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import {
  InputRange, InputRangeProps
} from "..";


const meta: Meta<typeof InputRange> = {
  title: "components/InputRange",
  component: InputRange,
  parameters,
  argTypes: props,
};


type Story = StoryObj<typeof InputRange>;

const style = {
  width : "400px",
};

export const Default: Story = (args: InputRangeProps) => 
  <div style={style}><InputRange {...args} /></div>
;
Default.args = {
  checked: false,
  handleToggleChange: () => {},
  handleInputChangeFrom: () => {},
  handleInputChangeTo: () => {},
  id: "inputRango",
  label: "Antiguedad del cliente",
  valueToggle: "",
  valueFrom: "",
  valueTo: "",
  typeInput: "date",
  required: false,
};

export default meta;