import type { Meta, StoryObj } from "@storybook/react";
import { TodoItem } from "./todo";

const meta: Meta<typeof TodoItem> = {
  title: "loader/todo",
  component: TodoItem,

};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Primary: Story = {
  loaders: [
    async () => ({
      todo: await (
        await fetch("https://jsonplaceholder.typicode.com/todos/1")
      ).json(),
    }),
  ],
  render: (args, { loaded: { todo } }) => <TodoItem {...args} {...todo} />,
};
