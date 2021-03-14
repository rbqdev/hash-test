import { Story, Meta } from "@storybook/react/types-6-0";
import CalculatorCard, { ICalculatorCard } from ".";

export default {
  title: "Components/CalculatorCard",
  component: CalculatorCard
} as Meta;

export const Default: Story<ICalculatorCard> = args => (
  <CalculatorCard {...args} />
);
