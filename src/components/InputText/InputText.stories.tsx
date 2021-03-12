import { Story, Meta } from "@storybook/react/types-6-0";
import InputText, { IInputText, ICustomInput } from ".";

export default {
  title: "InputText",
  component: InputText,
  args: {
    label: "InputText",
    name: "input-text",
    textInfo: "",
    error: false
  }
} as Meta;

export const Default: Story<IInputText & ICustomInput> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputText {...args} />
  </div>
);
