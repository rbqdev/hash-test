import { Story, Meta } from "@storybook/react/types-6-0";
import Loader from ".";

export default {
  title: "Components/Loader",
  component: Loader,
  args: {
    customText: ""
  }
} as Meta;

export const Default: Story = args => <Loader {...args} />;
