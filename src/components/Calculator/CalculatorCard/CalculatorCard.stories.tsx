import { Story, Meta } from "@storybook/react/types-6-0";
import CalculatorCard, { ICalculatorCard } from ".";

export default {
  title: "CalculatorCard",
  component: CalculatorCard
} as Meta;

export const Default: Story<ICalculatorCard> = args => (
  <CalculatorCard {...args} />
);
