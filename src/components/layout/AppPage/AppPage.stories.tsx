import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";

import { AppPage } from ".";

const meta: Meta<typeof AppPage> = {
  title: "layout/appPage",
  component: AppPage,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = () => <AppPage />;
export { Default };
export default meta;
