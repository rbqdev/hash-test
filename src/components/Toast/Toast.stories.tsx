import { Story, Meta } from "@storybook/react/types-6-0";
import useToast from "@hooks/useToast";
import Toast, { IToast, ToastType } from ".";
const { default: ToastMd } = require("./Toast.stories.md");

export default {
  title: "Toast",
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: ToastMd
      }
    }
  }
} as Meta;

export const Default: Story<IToast> = () => {
  const { dispatchToast } = useToast();
  const toastTypes: ToastType[] = ["info", "success", "warning", "error"];

  return (
    <>
      {toastTypes.map(type => (
        <button
          style={{ marginRight: 20 }}
          key={type}
          onClick={() =>
            dispatchToast({
              message: `Toast ${type.toUpperCase()}`,
              type,
              duration: 1500
            })
          }
        >
          Dispatch {type.toUpperCase()} Toast
        </button>
      ))}
    </>
  );
};
