import { Story, Meta } from "@storybook/react/types-6-0";
import InputMdr from ".";
import { ICustomInput } from "@components/InputText";

export default {
  title: "InputMdr",
  component: InputMdr,
  parameters: {
    docs: {
      description: {
        component: "InputMdr should format value with percent. Ex: 100%"
      }
    }
  },
  args: {
    error: false
  }
} as Meta;

export const Default: Story<ICustomInput> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputMdr {...args} />
  </div>
);
