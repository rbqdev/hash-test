import { Story, Meta } from "@storybook/react/types-6-0";
import CalculatorDetailsValues, { ICalculatorDetailsValues } from ".";

export default {
  title: "CalculatorDetailsValues",
  component: CalculatorDetailsValues,
  args: {
    values: {
      1: 1,
      15: 15,
      30: 30,
      90: 90,
      120: 120
    }
  }
} as Meta;

export const Default: Story<ICalculatorDetailsValues> = args => (
  <CalculatorDetailsValues {...args} />
);
