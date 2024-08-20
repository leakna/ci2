import { Meta, StoryObj } from "@storybook/react";
import DynamicButton from "./dynamicButton";


const meta: Meta<typeof DynamicButton> = {
  title: "exercise/dynamicbutton",
  component: DynamicButton,
};
export default meta;
export const Primary: StoryObj<typeof DynamicButton> = {
  args: {
    title: "gay",
    size: "large",
    variant:'primary'
  },
};
