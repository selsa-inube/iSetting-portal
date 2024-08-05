import { ArgTypes } from "@storybook/react";

import { ReasonForChangeProps } from "..";

export const parameters = {
    docs: {
        description: {
            component:
                "Component that renders a textarea to input the reason for a change",
        },
    },
    controls: {
        exclude: ["value", "state"],
    },
};

export const props: Partial<ArgTypes<ReasonForChangeProps>> = {
    label: {
        description: "The label of the textarea",
    },
    onHandleChange: {
        description: "Function to handle the change event",
    },
    placeholder: {
        description: "The placeholder of the textarea",
    },
    required: {
        description: "If the textarea is required",
    },
    value: {
        description: "The value of the textarea",
    },
};
