import { Story, Meta } from "@storybook/react/types-6-0";
import InputInstallments from ".";
import { ICustomInput } from "@components/InputText";

export default {
  title: "InputInstallments",
  component: InputInstallments,
  args: {
    error: false
  }
} as Meta;

export const Default: Story<ICustomInput> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputInstallments {...args} />
  </div>
);
