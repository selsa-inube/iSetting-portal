import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { DecisionModal, IDecisionModal } from "..";

const story: Meta<typeof DecisionModal> = {
  component: DecisionModal,
  title: "components/feedback/DecisionModal",
};

const Template: StoryFn<IDecisionModal> = (args) => <DecisionModal {...args} />;

const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  title: "Text title",
  description: "Text description",
  actionText: "Text Action",
  closeModal: action("DecisionModal closed"),
  handleClick: action("DecisionModal action"),
};
export { Default };
export default story;
