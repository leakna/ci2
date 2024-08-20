import { Meta, StoryObj } from '@storybook/react';
import ButtonControl from './buttonControl';
import { action } from '@storybook/addon-actions';

// Meta configuration for the ButtonControl component in Storybook
const meta: Meta<typeof ButtonControl> = {
  title: 'control button',
  component: ButtonControl,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'] 
};

// Named exports must come before the default export
export const Primary: StoryObj<typeof ButtonControl> = {
  args: {
    children:'ujsdhfisuhfusd',
    variant: 'primary', // Default variant for this story
    
  },
};

export default meta;
