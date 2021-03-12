import { Story, Meta } from "@storybook/react/types-6-0";
import CalculatorCard from ".";

export default {
  title: "CalculatorCard",
  component: CalculatorCard
} as Meta;

export const Default: Story<{ isOffline?: boolean }> = args => (
  <CalculatorCard {...args} />
);
