import { ArgTypes } from "@storybook/react";

import { RulesViewCardProps } from "..";

export const parameters = {
  docs: {
    description: {
      component: "Component to handle the validity of a product or service",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

export const props: Partial<ArgTypes<RulesViewCardProps>> = {
  children:{
    description: "The criteria for the decision",
    table: {
      type: {
        summary: "React.ReactNode",
      },
    },
  },
  handleDelete:{
    description: "Function to handle the deletion of a rule",
    table: {
      type: {
        summary: "(id: string) => void",
      },
    },
  },
  handleView:{
    description: "Function to handle the viewing of a rule",
    table: {
      type: {
        summary: "(id: string) => void",
      },
    },
  },
  id:{
    description: "The id of the rule",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};
