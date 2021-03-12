import { Story, Meta } from "@storybook/react/types-6-0";
import CalculatorDetailsWrapper from ".";

export default {
  title: "CalculatorDetailsWrapper",
  component: CalculatorDetailsWrapper
} as Meta;

export const Default: Story = args => <CalculatorDetailsWrapper {...args} />;
