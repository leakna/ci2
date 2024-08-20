// LoginForm.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { LoginForm } from './login';

const meta: Meta<typeof LoginForm> = {
  title: "play/login",
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {};

export const FormWithErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.clear(canvas.getByTestId('email')); 
    await userEvent.clear(canvas.getByTestId('password')); 
    await userEvent.click(canvas.getByRole('button'));

    // Assert DOM structure for error messages
    await expect(canvas.getByText('Email is required.')).toBeInTheDocument();
    await expect(canvas.getByText('Password is required.')).toBeInTheDocument();
  },
};


// Story for a form with success message
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate interactions with the component
    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
    await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
    await userEvent.click(canvas.getByRole('button'));

    // Assert DOM structure for success message
    await expect(canvas.getByText('Everything is perfect. Your account is ready and we should probably get you started!')).toBeInTheDocument();
  },
};
