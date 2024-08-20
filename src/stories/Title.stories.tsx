import type { Meta, StoryObj } from '@storybook/react';
import ProductTitle from '../app/component/atom/productTitle';

export default {
  title: 'Server/ProductTitle',
  component: ProductTitle,
  parameters: {
    backgrounds: {
      default: 'light', // Default background color for this story
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
};



type Story = StoryObj<typeof ProductTitle>;

export const Primary: Story = {
  args: {
   title:'gay'
  },
};

export const NotGay: Story = {
  args: {
    title:'not gay'
  },
};
export const OnDark = {
  // 👇 Story-level parameters
  parameters: {
    backgrounds: {
      default: 'dark', // Set default background color for the Playground
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
};
