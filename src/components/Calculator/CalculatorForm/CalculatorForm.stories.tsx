import { Story, Meta } from "@storybook/react/types-6-0";
import CalculatorForm from ".";

export default {
  title: "CalculatorForm",
  component: CalculatorForm
} as Meta;

export const Default: Story = args => <CalculatorForm {...args} />;
