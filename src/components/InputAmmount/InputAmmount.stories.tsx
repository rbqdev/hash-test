import { Story, Meta } from "@storybook/react/types-6-0";
import InputAmmount from ".";
import { ICustomInput } from "@components/InputText";

export default {
  title: "Components/InputAmmount",
  component: InputAmmount,
  parameters: {
    docs: {
      description: {
        component:
          "InputAmmount should format value with currency. Ex: R$ 100,00"
      }
    }
  },
  args: {
    error: false
  }
} as Meta;

export const Default: Story<ICustomInput> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputAmmount {...args} />
  </div>
);
